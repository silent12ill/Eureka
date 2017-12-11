const assert = require('assert');
const User = require('../db').User;

describe('subdocuments', function() {
    this.timeout(10000);

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

    it('can update existing records with sub-documents', (done) => {
        const sample = new User({
            email: 'test@test.com',
            password: 'test-password',
            bookmarks: ['12346', 'de45grs2'],
            videosSubmitted: [],
            videoPreference: []
        });
        sample.save()
            .then(() => User.findOne({email: 'test@test.com'}))
            .then((user) => {
               user.videosSubmitted.push({videoId: '21353fs', dateSubmitted: '20170823'});
               return user.save();
            })
            .then(() => User.findOne({ email: 'test@test.com' }))
            .then((user) => {
                assert(user.videosSubmitted.length === 1);
                done();
            });
    });

    it('can delete a subdocument', function(done) {
        setTimeout(done, 2500);
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
            .then(() => User.findOne({ email: 'test@test.com '}))
            .then((user) => {
                const toDelete = user.videosSubmitted[0];
                toDelete.remove();
                return toDelete.save();
            })
            .then(() => User.findOne({ email: 'test@test.com' }))
            .then((user) =>{
               assert(user.videosSubmitted.length === 1);
               done();
            });
    });
});

