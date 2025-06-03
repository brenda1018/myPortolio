import form from '../models/form.js'; 
export async function handleFormSubmit(req, res) {
    try {
      console.log('Received form data:', req.body);
  
      const { firstname, lastname, email, subject } = req.body;
  
      // validate
      if (!firstname || !lastname || !email) {
        return res.status(400).send('Missing required fields.');
      }
      
      const formEntry = new form({
        name: firstname,
        lname: lastname,
        email: email,
        comment: subject,
      });

      await formEntry.save();

      // mongo should save this
  
      res.status(200).send('Form submitted successfully!');
    } catch (error) {
      console.error('Error in form submission:', error);
      res.status(500).send('Server error');
    }
  }


  // import the model now, add query to grab line 6, 

  // make sub folder for images named images
  // define schema, what format
  // const mongoose = require('mongoose');

  // define schema and import schema to the controller - done
// schema example 
// add this data to the DB 
// update query, check if email in the db and then update the comment, 
// create a class container and you can add as many functions
// single export -- one time, will ex port whole class
// import the import class
// formController(class name).formSubmisson() 
// formsubmission.handleform
// make navbar bigger or format better