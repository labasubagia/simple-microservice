const { model } = require("mongoose");

exports.Post = model("Post", { title: String });
