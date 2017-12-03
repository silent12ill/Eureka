const assert = require('assert');
const Video = require('../db').Video;

describe('saving video details to the database', (done) => {
    let sampleVideo;

    it('saves a video', () => {
       sampleVideo = new Video({
           title: "The future of self-driving cars",
           url: "https://vimeo.com/channels/mercedesbenz/143864537",
           createdBy: "Mercedes-Benz",
           submittedBy: "admin",
           dateAdded: "2014/01/1",
           linkType: "Vimeo",
           category: "Technology",
           subcategory: "cars"
       });
       sampleVideo.save()
           .then(() => {
                assert(!sampleVideo.isNew);
                done();
           });
   });

});