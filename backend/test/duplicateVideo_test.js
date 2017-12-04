const assert = require('assert');
const Video = require('../db').Video;

describe('does not save duplicate values of a video',() => {
    let sampleVideo;

    beforeEach((done) => {
        sampleVideo =  new Video({
            title: "The future of self-driving cars",
            url: "https://vimeo.com/channels/mercedesbenz/143864537",
            createdBy: "Mercedes-Benz",
            submittedBy: "admin",
            dateAdded: "2014/01/1",
            linkType: "Vimeo",
            category: "Technology",
            subcategory: "cars"
        });
        sampleVideo.save(() => done());
    });

    it('saves only one video of same url', (done) => {
        sampleVideo =  new Video({
            title: "The future of self-driving cars",
            url: "https://vimeo.com/channels/mercedesbenz/143864537",
            createdBy: "Mercedes-Benz",
            submittedBy: "admin",
            dateAdded: "2014/01/1",
            linkType: "Vimeo",
            category: "Technology",
            subcategory: "cars"
        });
        sampleVideo.save();
        Video.find({url: "https://vimeo.com/channels/mercedesbenz/143864537"})
            .then((data) => {
                assert(data.length === 1);
                done();
            });
    });
});