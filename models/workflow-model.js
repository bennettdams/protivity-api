const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workflowSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: String
  },
  { autoIndex: false, collection: "workflows" }
);

const Workflow = mongoose.model("Workflow", workflowSchema);
module.exports = Workflow;
