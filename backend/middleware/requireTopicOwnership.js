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
    if (topic.user1 != userId && topic.user2 != userId) return res.status(401).json({ message: "Unauthorized" })
    next()
}
export default requireTopicOwnership