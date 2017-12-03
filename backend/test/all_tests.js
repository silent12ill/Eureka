const assert = require('assert');
const User = require('../db').User;

describe('Creating records', () => {
    it('saves a user', () => {
        const sampleUser = new User({
            email: 'test-user@test.com',
            password: '1234356'
        });
        sampleUser.save();
    });
});


// to run the test, npm run test "backend/test/**/*.js"