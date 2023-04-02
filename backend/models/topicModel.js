import mongoose from "mongoose";

// topics collect together all the tasks for a pair of users
const topicSchema = new mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
    user1Goal: { type: String, required: true },
    user2Goal: { type: String, required: false },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true }],
})
topicSchema.index({ user1Goal: 1, user2Goal: 1, user1: 1, user2: 1}, { unique: true });


const topicModel = mongoose.model("Topic", topicSchema);
export default topicModel;
