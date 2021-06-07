const axios = require("axios");

exports.postUrl = process.env.SERVICE_POST_URL;

exports.commentUrl = process.env.SERVICE_COMMENT_URL;

exports.getAllPost = async () => {
  const response = await axios.get(`${this.postUrl}/post-with-comment`);
  const data = await response.data;
  return data;
};

exports.getSinglePost = async (id) => {
  const response = await axios.get(`${this.postUrl}/post/${id}`);
  const data = await response.data;
  return data;
};

exports.createPost = async (title) => {
  const response = await axios.post(`${this.postUrl}/post`, { title });
  const data = await response.data;
  return data;
};

exports.commentPost = async (postId, message) => {
  const url = `${this.commentUrl}/post/${postId}`;
  const response = await axios.post(url, { message });
  const data = await response.data;
  return data;
};
