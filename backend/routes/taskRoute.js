import express from "express"
import { upsertTask, getTask, removeTask} from "../controllers/taskController.js"
import requireAuth from "../middleware/requireAuth.js";
import requireTopicOwnership from "../middleware/requireTopicOwnership.js";

const router = express.Router();

router.post("/:topicId/", [requireAuth, requireTopicOwnership], upsertTask) // add task belonging to the user to the topic
router.get("/:topicId/", [requireAuth, requireTopicOwnership], getTask)
router.delete("/:topicId", [requireAuth, requireTopicOwnership], removeTask)

export default router;