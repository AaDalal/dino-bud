import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title:{ type:String, required:true },
    description:{ type:String, required:true },
    completed:{ type:Boolean, required:true },
    // a backref to the topic this task belongs to
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {timestamps:true});

const taskModel = mongoose.model("Task", taskSchema);
export default taskModel;