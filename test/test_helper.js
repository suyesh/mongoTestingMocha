const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/users_test', { useNewUrlParser: true });
mongoose.connection
        .once('open', () => console.log('Good to go!'))
        .on('error', (error) => console.warn('Warning', error));

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
