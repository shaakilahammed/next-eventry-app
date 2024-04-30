'use server';
import connectMongo from '@/dbConnect/connectMongo';
import User from '@/models/User';
import { replaceMongoIdInObject } from '@/utils/utils';
import { redirect } from 'next/navigation';

export const createUser = async (formData) => {
    const user = Object.fromEntries(formData);
    let newUser = null;
    try {
        await connectMongo();
        newUser = await User.create(user);
    } catch (error) {
        console.log(error);
    }
    newUser && redirect('/login');
};

export const loginUser = async (formData) => {
    const user = Object.fromEntries(formData);
    try {
        await connectMongo();
        const foundUser = await User.findOne(user).lean();
        if (foundUser) return replaceMongoIdInObject(foundUser);
        return null;
    } catch (error) {
        console.log(error);
    }
};
