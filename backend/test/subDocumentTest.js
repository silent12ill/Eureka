const assert = require('assert');
const User = require('../db').User;

describe('subdocuments', () => {
    it('can create sub documents', (done) => {
       const sample = new User({
           email: 'test@test.com',
           password: 'test-password',
           bookmarks: ['12346', 'de45grs2'],
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
              assert(user.videosSubmitted.length === 2);
              done();
           });
    });
});

