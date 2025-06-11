import form from '../models/form.js';

class FormController {
  async handleFormSubmit(req, res) {
    try {
      const { firstname, lastname, email, subject } = req.body;

      if (!firstname || !lastname || !email) {
        return res.status(400).send('Missing required fields.');
      }

      const existingEntry = await form.findOne({ email });

      if (existingEntry) {
        existingEntry.name = firstname;
        existingEntry.lname = lastname;
        existingEntry.comment = subject;
        await existingEntry.save();
        return res.status(200).json({
          success: true,
          message: "Successfully" });
        }

      const newEntry = new form({
        name: firstname,
        lname: lastname,
        email,
        comment: subject,
      });
    
      await newEntry.save();
      return res.status(200).json({
        success: true,
        message: "Successfully" });



    } catch (error) {
      console.error('Error in form submission:', error);
      res.status(500).send('Server error');
    }
  }

  async updateFormByEmail(req, res) {
    try {
      const { email, firstname, lastname, subject } = req.body;

      if (!email) {
        return res.status(400).send('Email is required for update.');
      }

      const updated = await form.findOneAndUpdate(
        { email },
        { $set: { name: firstname, lname: lastname, comment: subject } },
        { new: true }
      );

      if (!updated) {
        return res.status(404).send('No entry found!');
      }

      res.status(200).json({ message: 'Update Success', data: updated });
    } catch (error) {
      console.error('Error updating form:', error);
      res.status(500).send('Server error');
    }
  }
}

const formController = new FormController();
export default formController;


  // import the model now, add query to grab line 6, 

  // make sub folder for images named images
  // define schema, what format
  // const mongoose = require('mongoose');

  // define schema and import schema to the controller - done
// schema example 
// add this data to the DB 
// update query, check if email in the db and then update the comment, 
  // create global class, mention functions inside it, then add export statement with class name
  // create a single export
// create a class container and you can add as many functions
// make lists for summary for rojects and leadership 
// single export -- one time, will ex port whole class

// for query create udpate function, check if emailid is in data base, if so update the FN LN AND comments. 
// formController(class name).formSubmisson() 
// formsubmission.handleform
// once db is done, move to middleware 
