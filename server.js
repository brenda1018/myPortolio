import express from 'express';
import path from 'path';
import routes from './routes/formRouter.js'; // importing
import form from './models/form.js'; 
import { fileURLToPath } from 'url';
//require('dotenv').config(); 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT =  3000;

import { connectDB } from './config/connection.js';
await connectDB();


// db = client.connect()
// db.database('mean')
// create a models folder and create a form .js - done 
// formschema, have to export the model so we can work it with other files- done

//  engine
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// render main page
app.get('/data', async (req, res) => {
  try {
    const examples = await form.find();
    res.json({ message: 'Fetched data successfully', data: examples });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle form POST now moved to routes.js
app.use('/', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
const uri = "mongodb+srv://Cluster90226:mango12@cluster90226.m9nffmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster90226";