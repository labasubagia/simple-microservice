const axios = require("axios");

exports.commentUrl = process.env.SERVICE_COMMENT_URL;

exports.getCommentByPostIds = async (postIds) => {
  const payload = { params: { postIds } };
  const url = `${this.commentUrl}/post-ids`;
  const response = await axios.get(url, payload);
  const result = await response.data;
  return result;
};
