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
  // create global class, mention functions inside it, then add export statement with class name
  // create a single export
// create a class container and you can add as many functions
// make lists for summary for rojects and leadership 
// single export -- one time, will ex port whole class

// for query create udpate function, check if emailid is in data base, if so update the FN LN AND comments. 
// formController(class name).formSubmisson() 
// formsubmission.handleform
// once db is done, move to middleware 
