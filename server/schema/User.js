import mongoose from 'mongoose';

// export interface UserInterface {
//     firstname: string;
//     lastname: string;
//     email: string;
//     username: string;
//     password: string;
// }
const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
});
export const User = mongoose.model('User', userSchema);
