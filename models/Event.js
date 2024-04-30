import mongoose from 'mongoose';

const EventsSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    details: {
        required: true,
        type: String,
    },
    location: {
        required: true,
        type: String,
    },
    imageUrl: {
        required: true,
        type: String,
    },
    interested_ids: {
        required: false,
        type: Array,
    },
    going_ids: {
        required: false,
        type: Array,
    },
    swgs: {
        required: false,
        type: Array,
    },
});

const Event = mongoose.models.Event || mongoose.model('Event', EventsSchema);
export default Event;
