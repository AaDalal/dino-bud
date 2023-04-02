import topicModel from '../models/topicModel.js'
import userModel from '../models/userModel.js'

const addTopic = async (req, res) => {
    const { user2Goal } = req.body;

    // TODO: decide on this
    // for now, user2 is always set to null on topic creation
    const user2 = null

    // assert that the first user is the logged in user
    if (user2 !== null && !(await userModel.findOneById({ _id: user2 }))) return res.status(400).json({ message: "Invalid user2" })

    try {
        const topic = new topicModel({ user1: req.user.id, user2, user1Goal, user2Goal: user2Goal || null, tasks: [] });
        const result = await topic.save();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

/**
 * All the views below use the requireTopicOwnership middleware
 */

const getTopic = async (req, res) => {
    if (!req.params.topicId) return res.status(400).json({ message: "Topic ID is required" })
    
    const topic = await topicModel.findOne({ _id: req.params.topicId })    
    
    // display the tasks along side the topic
    await topic.populate("tasks")

    return res.status(200).json(topic)
}

const updateTopic = async (req, res) => {
    const { topicId } = req.params;
    const { user1Goal, user2Goal } = req.body; // can only update title

    // TODO: add validation that user1 only sets their own goal (& vice versa)
    try {
        const result = await topicModel.findOneAndUpdate({ _id: topicId }, { user1Goal, user2Goal }, { new: true });
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Internal server error: ${error}` });
    }
}

const addUserToTopic = async (req, res) => {
    const { topicId } = req.params;
    const topic = await topicModel.findOne({ _id: topicId })
    if (topic.user2) return res.status(400).json({ message: "This topic already has two users" })
    if (topic.user1 == req.user.id) return res.status(400).json({ message: "You are already in this topic" })

    try {
        const topic = await topicModel.findByIdAndUpdate(topicId, { user2: req.user.id }, { new: true })
        res.status(200).json(topic)
    } catch (error) {
        res.status(404).json({ message: "Topic not found" })
    }
}

export { getTopic, updateTopic, addTopic, addUserToTopic }