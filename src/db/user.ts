import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false }
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

export const getUsers =() => User.find();
export const getUserByEmail =(email:string) => User.findOne({ email });
export const getUserBySeessionToken =(sessionToken:string) => User.findOne({ 'authentication.sessionToken': sessionToken });
export const getUserById =(id:string) => User.findById(id);
export const createUser =(userData:Record<string, any>) => new User(userData).save().then((user) => user.toObject());
export const deleteUserById =(id:string) => User.findByIdAndDelete(id);
export const updateUserById =(id:string, updateData:Record<string, any>) => User.findByIdAndUpdate(id, updateData);