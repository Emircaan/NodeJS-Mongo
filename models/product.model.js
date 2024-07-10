import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: [true, "Please enter task description"],
    },
  },

  { timestamps: true }
);

const TaskModel = mongoose.model("Task", TaskSchema);

export { TaskModel };
