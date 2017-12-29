const Queue = require('../db').Queue;
const Video = require('../db').Video;

let toDelete = function (videoId) {
    Queue.remove({videoId: videoId}, (err, data1) => {
        if(err) {
            throw err;
        } else {
            console.log('deleted!');

        }
    })
};

const approveVideo = (req, res) => {
    // receive an entire video object from client email, id, cat, subcat

    console.log(req.query);

    Queue.findOne({videoId: req.query.videoId}, (err, data) => {
        if(err) {
            throw err;
        } else {
            let cat = req.query.category;
            let subCat = req.query.subcategory;

            let toSaveVideo = new Video({
                videoId: data.videoId,
                url : data.url,
                linkType : data.linkType,
                title : data.title,
                description : data.description,
                likes : data.likes,
                dislikes : data.dislikes,
                viewCount : data.viewCount,
                bookmarked : data.bookmarked,
                category : cat,
                subcategory : subCat,
                thumbnail : data.thumbnail,
                createdBy : data.createdBy,
                dateCreated : data.dateCreated,
                submittedBy : data.submittedBy,
                dateSubmitted: data.dateSubmitted
            });
            console.log('to be saved to the video collection', toSaveVideo);
            toSaveVideo.save((err) => {console.log(err)});
            toDelete(data.videoId);
            res.status(200).send('deleted successfully');
        }
    });
};



module.exports = approveVideo;