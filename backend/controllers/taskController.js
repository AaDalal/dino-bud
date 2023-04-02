import taskModel from "../models/taskModel.js";
import userModel from "../models/userModel.js";
import { createTransport } from 'nodemailer';
import dotenv from "dotenv";
import topicModel from "../models/topicModel.js";
dotenv.config();

const removeByValue = (arr, value) => {
    let index = arr.indexOf(value);
    if (index !== -1) {
        arr.splice(index, 1);
        return true
    }
    return false
}

/***
 * Note: all of the below function run after requireTopicOwnership middleware
 */

const updateTask = async (req, res) => {
    const { topicId } = req.params;
    const userId = req.user.id;
    const { id, title, description, completed } = req.body;
    
    const task = await taskModel.findOne({_id: id});
    if (!task) return res.status(404).json({ message: "Task not found" })
    else if (task.user != userId) return res.status(401).json({ message: "Unauthorized" })
    else if (task.topic != topicId ) return res.status(401).json({ message: "Task is not for this topic!" })

    try {
        const task = await taskModel.updateOne({ _id: id }, { title, description, completed }, { new: true })
        return res.status(200).json(task)
    } catch (error) {
        return res.status(400).json({ message: `Invalid task data: ${error.message}` })
    }
}

const createTask = async (req, res) => {
    const { topicId } = req.params;
    const topic = await topicModel.findOne({ _id: topicId });
    const user = req.user.id;

    const { title, description } = req.body;
    const task = new taskModel({ title, description, completed: false, topic, user })
    await topic.update({ $push: { tasks: task._id } }, { new: true })

    try {
        await Promise.all([topic.save(), task.save()])
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: `Invalid task data: ${error.message}` })
    }
    return res.status(200).json(task)
}

const upsertTask = async (req, res) => {
    if (req.body.id) return updateTask(req, res);
    else return createTask(req, res);
}

const removeTask = async (req, res) => {
    /**
     * Expect body to be of form { id: <id> }
     */
    const { id } = req.body;
    const { topicId } = req.params;
    const userId = req.user.id;
    const topic = await topicModel.findOne({_id: topicId});
    const task = await taskModel.findOne({_id: id});

    if (!task) return res.status(404).json({ message: "Task not found" })    
    if (task.user != userId) return res.status(401).json({ message: "Unauthorized" }) 
    if (!removeByValue(topic.tasks, id)) return res.status(500).json({ message: "Could not remove task from topic because it does not exist in the topic!" })

    Promise.all([task.remove(), topic.save()])
        .then(() => res.status(204))
        .catch((error) => res.status(501).json({ message: error.message }))
}

const getTask = (req, res) => {
    taskModel.find({ user: req.user.id, topic: req.params.topicId })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(404).json({ message: error.message }))
}

export { upsertTask, getTask, removeTask }