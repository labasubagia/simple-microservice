const { Router } = require("express");
const controller = require("./controller");

const router = Router();
router.get("/post", controller.getAllPost);
router.get("/post/:id", controller.getSinglePost);
router.post("/post", controller.createPost);
router.post("/post/:id/comment", controller.commentPost);

module.exports = router;
