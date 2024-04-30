import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
    name: {},
});

const User = mongoose.models.User || mongoose.model('User', UsersSchema);
export default User;
