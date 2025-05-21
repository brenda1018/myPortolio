const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//  engine
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Needed for fetch JSON

// Route to render main page
app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle form POST
app.post('/submit-form', (req, res) => {
  console.log('✅ Received POST /submit-form');
  console.log('Body:', req.body);

});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
