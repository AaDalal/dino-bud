import topicModel from "../models/topicModel.js"

/**
 * Topic ownership middleware, to be used after requireAuth. Expects a topicId parameter in the url.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const requireTopicOwnership = async (req, res, next) => {
    const userId = req.user.id
    const topic = await topicModel.findOne({ _id: req.params.topicId })

    if (!topic) return res.status(404).json({ message: "Topic not found" })
    // if user2 is not set, then allow anyone to access the topic
    if (topic.user1 != userId && user2 && topic.user2 != userId) return res.status(401).json({ message: "Unauthorized" })
    next()
}
export default requireTopicOwnership