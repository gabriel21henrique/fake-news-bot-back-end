const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://your-news-central:aF5tp9XH5O2MxmIj@your-news-central.a4vtw.mongodb.net/your-news-central?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);
