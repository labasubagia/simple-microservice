const { model, Types } = require("mongoose");

exports.Comment = model("Comment", {
  parentId: Types.ObjectId,
  parentType: { type: String, enum: ["post", "feed"] },
  message: String,
});
