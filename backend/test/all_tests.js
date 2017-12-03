const assert = require('assert');
const User = require('../db').User;

describe('Creating records', () => {
    it('saves a user', (done) => {
        const sampleUser = new User({
            email: 'test-user@test.com',
            password: '1234356'
        });
        sampleUser.save()
            .then(() => {
                // check if the sampleUser is not a new one to be added(it's saved first and then we check if it's new or old
                assert(!sampleUser.isNew);
                done();
            })
    });

});




// to run the test, npm run test "backend/test/**/*.js"