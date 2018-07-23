const assert = require('assert');
const User = require('../src/models/user')


describe('Reading records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe'});
    joe.save()
       .then(() => done())
  });

  it('Finds all users with a name of Joe', (done) => {
    User.find({ name: 'Joe' })
        .then((users) => {
          assert(users[0]._id.toString() === joe._id.toString())
          done();
        });
  });
})
