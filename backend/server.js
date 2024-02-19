
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/reportApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(bodyParser.json());


app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
