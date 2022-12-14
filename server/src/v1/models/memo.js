const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  icon: {
    type: String,
    default: "π",
  },
  title: {
    type: String,
    default: "η‘ι‘",
  },
  description: {
    type: String,
    default: "γγγ«θͺη±γ«θ¨ε₯γγ¦δΈγγ",
  },
  position: {
    type: Number,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  favoritePosition: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Memo", memoSchema);
