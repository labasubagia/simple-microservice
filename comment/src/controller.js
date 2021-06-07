const { Types } = require("mongoose");
const { Comment } = require("./model");

exports.getPostCommentsByPostIds = async (req, res) => {
  let postIds = req.query.postIds || [];
  postIds = typeof postIds === "string" ? [postIds] : postIds;
  postIds = postIds.map((v) => Types.ObjectId(v));
  const comments = await Comment.find({
    parentId: { $in: postIds },
    parentType: "post",
  });
  res.json(comments);
};

exports.getPostCommentByPostId = async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.find({
    parentId: Types.ObjectId(postId),
    parentType: "post",
  });
  res.json(comments);
};

exports.createPostComment = async (req, res) => {
  const { postId } = req.params;
  const { message } = req.body;
  const comment = await Comment.create({
    parentId: postId,
    parentType: "post",
    message,
  });
  res.json(comment);
};
