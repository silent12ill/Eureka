const assert = require('assert');
const  User = require('../db').User;
const bcrypt = require('bcrypt');

describe('testing the signup, password hashing', () => {
   beforeEach((done) => {
       const sampleUser = new User({
           email: 'test-user@test.com',
           password: 'test1234'
       });

       bcrypt.hash(sampleUser.password, 10, (err, hash) => {
          if(err) return err;
          sampleUser.password = hash;
       });

       sampleUser.save(() => done());
   });

   it('retrieve password for the user and check if it\'s hashed', (done) => {
      User.find( {email: 'test-user@test.com'} )
          .then((userObj) => {
              assert(userObj[0].password !== 'test1234');
              done();
          });
   });
});

