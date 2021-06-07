const { Post } = require("./model");
const { getCommentByPostIds } = require("./service");

exports.createPost = async (req, res) => {
  const { title } = req.body;
  const post = await Post.create({ title });
  res.json(post);
};

exports.getAll = async (_, res) => {
  res.json(await Post.find());
};

exports.getAllWithComment = async (_, res) => {
  try {
    const posts = await Post.find();
    const postIds = posts.map((v) => v.id);
    const comments = await getCommentByPostIds(postIds);
    const result = posts.map((v) => ({
      ...v.toObject(),
      comments: comments.filter((c) => c.parentId == v.id),
    }));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSingleWithComment = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    const comments = await getCommentByPostIds([post.id]);
    post = {
      ...post.toObject(),
      comments: comments.filter((c) => c.parentId == post.id),
    };
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
