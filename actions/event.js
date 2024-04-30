import connectMongo from '@/dbConnect/connectMongo';
import Event from '@/models/Event';
import { replaceMongoIdInArray, replaceMongoIdInObject } from '@/utils/utils';

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
