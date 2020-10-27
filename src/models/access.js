const mongoose = require('mongoose');

const accessSchema = new mongoose.Schema({
  dateTime: String,
  deviceType: String,
  newsType: String,
  location: {
    latitude: String,
    longitude: String,
    state: String,
  }
});

mongoose.model('Access', accessSchema);
