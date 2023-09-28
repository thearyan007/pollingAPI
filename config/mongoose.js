// Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/pollingAPI', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));


