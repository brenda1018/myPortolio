import { mongoose } from "mongoose";

const ExampleSchema = new mongoose.Schema(
  { name: String, lname: String, email: String, comment: String },
  { collection: "data" }
);
const form = mongoose.model("data", ExampleSchema);

export default form;