const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/post", controller.getAll);
router.get("/post/:id", controller.getSingleWithComment);
router.get("/post-with-comment", controller.getAllWithComment);
router.post("/post", controller.createPost);

module.exports = router;
