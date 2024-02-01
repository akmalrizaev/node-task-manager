const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://akmalcert:Kandym@nodetaskmanager.rkirtmg.mongodb.net/Node-Task-Manager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the DB...');
  })
  .catch((err) => {
    console.log(err);
  });
