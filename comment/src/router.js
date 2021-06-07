const { Router } = require("express");
const controller = require("./controller");

const router = Router();
router.get("/post-ids", controller.getPostCommentsByPostIds);
router.get("/post/:postId", controller.getPostCommentByPostId);
router.post("/post/:postId", controller.createPostComment);

module.exports = router;
