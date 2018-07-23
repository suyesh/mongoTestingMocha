const assert = require('assert')
const User = require('../src/models/user')

describe('Creating records', () => {
  it('Saves a user', (done) => {
    const joe = new User({ name: 'Joe' });

    joe.save()
       .then(() => {
         assert(!joe.isNew);
         done();
       });
  });
});
