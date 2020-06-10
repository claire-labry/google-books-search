const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// API routes
app.use(routes);

// Connect to Mongoose

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`API server now on port:${PORT}`);
});
