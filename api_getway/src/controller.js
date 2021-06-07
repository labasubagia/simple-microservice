const service = require("./service");

exports.getSinglePost = async (req, res) => {
  return res.json(await service.getSinglePost(req.params.id));
};

exports.getAllPost = async (_, res) => {
  return res.json(await service.getAllPost());
};

exports.createPost = async (req, res) => {
  const { title } = req.body;
  res.json(await service.createPost(title));
};

exports.commentPost = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  res.json(await service.commentPost(id, message));
};
