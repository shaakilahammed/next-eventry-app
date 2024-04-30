import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    phone: {
        required: true,
        type: String,
    },
    bio: {
        required: true,
        type: String,
    },
});

const User = mongoose.models.User || mongoose.model('User', UsersSchema);
export default User;
