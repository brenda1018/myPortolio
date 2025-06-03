
import { Router } from 'express';
const router = Router();
import { handleFormSubmit } from '../controller/formController.js';

// POST /submit-form
router.post('/submit-form', handleFormSubmit);

export default router;

// once db is finished move to middleware
// add middleware (handle any form errors or any missing inputs)
// use get, post, put and delete calls
// search for use cases, make sure it goes smoothly into db 