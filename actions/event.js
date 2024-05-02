'use server';
import EmailTemplate from '@/app/components/EmailTemplate';
import connectMongo from '@/dbConnect/connectMongo';
import Event from '@/models/Event';
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/utils/utils';
import mongoose from 'mongoose';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';

export const getAllEvents = async () => {
    try {
        await connectMongo();
        const events = await Event.find().lean();
        return replaceMongoIdInArray(events);
    } catch (error) {
        console.log(error);
    }
};

export const getEventbyId = async (id) => {
    try {
        await connectMongo();
        const event = await Event.findById(id).lean();
        return replaceMongoIdInObject(event);
    } catch (error) {
        console.log(error);
    }
};

export const updateInterest = async (eventId, authId) => {
    try {
        await connectMongo();
        const event = await Event.findById(eventId);
        if (event) {
            const foundUser = event.interested_ids.find(
                (id) => id.toString() === authId
            );
            if (foundUser) {
                event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
            } else {
                event.interested_ids.push(new mongoose.Types.ObjectId(authId));
            }
            event.save();
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateGoing = async (eventId, auth) => {
    try {
        await connectMongo();
        const event = await Event.findById(eventId);

        event.going_ids.push(new mongoose.Types.ObjectId(auth?.id));
        event.save();
        await sendEmail(eventId, auth);

        revalidatePath('/');
    } catch (error) {
        console.log(error);
    }
    redirect('/');
};

const sendEmail = async (eventId, user) => {
    try {
        // console.log(eventId, user, process.env.RESEND_API_KEY);
        const event = await getEventbyId(eventId);
        const resend = new Resend(process.env.RESEND_API_KEY);
        const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here.`;
        const sent = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: user?.email,
            subject: 'Successfully Registered for the event!',
            react: EmailTemplate({ message }),
        });
    } catch (error) {
        console.log(error);
    }
};
