import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema({
    playerName: {
        type: String,
    },
    status: {
        type: String,
    }
})

const User = mongoose.model("User", userSchema);

export default User;