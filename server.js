

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// this will be the view 
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// this is for static files like css
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
    // finds the jade file
  res.render('index'); 
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// create public folder and add images
// ajax call , call router, contoller 
// send results to backend return back to client
// increase linkedin icon size and add github icon 