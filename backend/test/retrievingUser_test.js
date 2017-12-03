const assert = require('assert');
const User = require('../db').User;

describe('verifying the existence of user', () => {
    let sampleUser;
    beforeEach((done) => {
        sampleUser = new User({
            email: 'test-user@test.com',
            password: '1234356'
        });
        sampleUser.save(() => done());
    });

    it('finding the test-user', (done) => {
        User.find({ email: 'test-user@test.com' })
            .then((result) => {
                // _id needs toString because on examining with robomongo it shows id is wrapped in ObjectId(_id)
                assert(result[0]._id.toString() === sampleUser._id.toString());
                done();
            })
    });

    it('find the test-user based on id', (done) => {
        User.findOne({ _id: sampleUser._id })
            .then((user) => {
                assert(user.email === 'test-user@test.com');
                done();
            });
    });
});