import mongoose from "mongoose"; 

const ExampleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String },
  },
  { collection: "datas" }
);

const Form = mongoose.model("datas", ExampleSchema);

export default Form;

// 1. pop up message when form submits 
// 2. fix UI, make it prettier
// 3. 