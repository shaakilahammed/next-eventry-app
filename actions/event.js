import connectMongo from '@/dbConnect/connectMongo';
import Event from '@/models/Event';
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/utils/utils';
import mongoose from 'mongoose';

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
