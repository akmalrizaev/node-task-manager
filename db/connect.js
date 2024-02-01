const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://akmalcert:Kandym@nodetaskmanager.rkirtmg.mongodb.net/Node-Task-Manager?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
