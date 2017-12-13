const assert = require('assert');
const User = require('../db').User;

describe('virtual types', function () {
    it('submitted videos returns the number of submitted videos', function(done) {
        const sample = new User({
            email: 'test@test.com',
            password: 'test1234',
            bookmarks: ['12343', '21312321', '23343543', '2342423'],
            videosSubmitted: [
                {
                    videoId: '123456',
                    dateSubmitted: '20172102'
                },
                {
                    videoId: 'de45grs2',
                    dateSubmitted: '20172102'
                }
            ],
            videoPreference: [
                {
                    likedVideoId: ['asds23', '21354sf'],
                    dislikedVideoId: ['as3455w', '3w423f']
                }
            ]
        });
        sample.save()
            .then(() => User.findOne({ email: 'test@test.com' }))
            .then((user) => {
               assert(user.bookmarksCount === 4);
               done();
            });
    });
});