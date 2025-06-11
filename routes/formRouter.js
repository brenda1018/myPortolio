
import { Router } from 'express';
import formController from '../controller/formController.js';

const router = Router();

function validateFormMiddleware(req, res, next) {
  const { firstname, lastname, email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!firstname || !lastname || !email || !emailRegex.test(email)) {
    return res.status(400).send('Invalid or missing input fields.');
  }

  next();
}

router.post('/submit-form', validateFormMiddleware, formController.handleFormSubmit);

export default router;


// once db is finished move to middleware
// add middleware (handle any form errors or any missing inputs)
// use get, post, put and delete calls
// search for use cases, make sure it goes smoothly into db 