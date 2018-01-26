const axios = require("axios");
const Video = require('../db').Video;
const Queue = require('../db').Queue;
const ytKey = "AIzaSyDZxJwtWfdNWheLpKk-lrLbXLHaiWZfp2s";
const vimKey = "53dea8ea88fb59d8aab79d5083257416";
const dmKey = "";

//Check videoUrl for hosting provider
module.exports = addVideo = (req, res) => {
  let info = {
    submittedBy: req.body.params.email,
    category: req.body.params.category,
    subcategory: req.body.params.subcategory,
    dateSubmitted: req.body.params.dateSubmitted,
    userComment: req.body.params.userComment,
    res: res
  };

  // flag for security uses
  let flag = 0;
  if(flag == 0 && req.body.params.url.indexOf('youtube.com') >= 0){
    let uniqueId = req.body.params.url;
    uniqueId = uniqueId.split('youtube.com/watch?v=')[1];
    if(uniqueId.length > 10) {
      uniqueId = uniqueId.slice(0, 11);
    }
    console.log('unique id length after slicing', uniqueId);
    verifyVideo(uniqueId, 'YouTube', info);
    flag = 1;
  }else if(flag == 0 && req.body.params.url.indexOf('dailymotion.com') >= 0){
    let uniqueId = req.body.params.url;
    uniqueId = uniqueId.split('dailymotion.com/video/')[1];
    verifyVideo(uniqueId, 'DailyMotion', info);
    flag = 1;
  } else if(flag == 0 && req.body.params.url.indexOf('vimeo.com') >= 0) {
    let uniqueId = req.body.params.url;
    if(uniqueId.indexOf('channels/staffpicks/') > -1){
      uniqueId = uniqueId.split('channels/staffpicks/')[1];

    } else {
      uniqueId = uniqueId.split('vimeo.com/')[1];

    }
    verifyVideo(uniqueId, 'Vimeo', info);
    flag = 1;
  } else {
    info.res.status(200).send("Link not from valid provider");
  }
};


function verifyVideo(id, provider, info){

    function cutDescription(description) {
        if(description.length > 255) {
            description = description.slice(0, 254) + '...';
        } else {
            description = description + '...';
        }
        return description;
    }

  if (provider == 'YouTube'){
    function convert_time(duration) {
      let a = duration.match(/\d+/g);
      if ((a[0] == 5 && a[1] > 0) || duration.indexOf('H') >= 0 || a[0] > 5) {
        return false;
      }
      return true;
    }
    const url =
      "https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,status&id="
      + id +"&fields=items(snippet/title, snippet/channelTitle, snippet/description, contentDetails/duration,status/embeddable,snippet/thumbnails,snippet/publishedAt)&key=" + ytKey;
    axios
      .get(url)
      .then(response => {
        if (convert_time(response.data.items[0].contentDetails.duration) === true) {
          let saveVideo = new Queue({
            title: response.data.items[0].snippet.title,
            videoId: id,
            url: 'https://www.youtube.com/watch?v=' + id,
            userComment: info.userComment,
            description: cutDescription(response.data.items[0].snippet.description),
            createdBy: response.data.items[0].snippet.channelTitle,
            submittedBy: info.submittedBy,
            dateSubmitted: info.dateSubmitted,
            linkType: provider,
            dateCreated: response.data.items[0].snippet.publishedAt,
            thumbnail: response.data.items[0].snippet.thumbnails.medium.url,
            likes: 0,
            dislikes: 0,
            bookmarked: 0,
            viewCount: 0
          });
          saveVideo.save((err) => console.log(err));
          info.res.status(200).send("Valid video and saved");
        } else {
          info.res.status(200).send("Duration too long");
        }

      })
      .catch(error => {
        console.log(error);
      });
  } else if (provider === 'DailyMotion') {

    const url =
      "https://api.dailymotion.com/video/"+ id + "?fields=owner,title,duration,allow_embed,description,created_time,thumbnail_360_url";

    axios
      .get(url)
      .then(response => {
        if (response.data.duration <= 300){
          console.log("DAILY MOTION RESPNSE", response.data);
          let saveVideo = new Queue({
            title: response.data.title,
            videoId: id,
            url: 'https://dailymotion.com/video/' + id,
            userComment: info.userComment,
            description: cutDescription(response.data.description),
            createdBy: response.data.owner,
            submittedBy: info.submittedBy,
            dateSubmitted: info.dateSubmitted,
            linkType: provider,
            dateCreated: response.data.created_time,
            thumbnail: response.data.thumbnail_url,
            likes: 0,
            dislikes: 0,
            bookmarked: 0,
            viewCount: 0
          });

          saveVideo.save((err) => console.log(err));
          info.res.status(200).send("Valid video and saved");
        } else {
          info.res.status(200).send("Duration too long");
        }
      })
      .catch(error => {
        console.log(error);
      });

  } else if (provider === 'Vimeo') {

    let videoThumbnail = '';
    axios
      .get(`http://vimeo.com/api/v2/video/${id}.json`)
      .then(response => {
        videoThumbnail = response.data[0].thumbnail_medium;
        console.log("videoThumbnail inside:", videoThumbnail);
      })
      .catch(error => {
        console.log(error);
      });
    console.log("videoThumbnail after:", videoThumbnail)


    const url =
      "https://api.vimeo.com/videos/" + id + "?access_token=" + vimKey + "&fields=name,duration,embed,privacy,user,description";
    axios
      .get(url)
      .then(response => {
        if (response.data.duration <= 300) {
          let saveVideo = new Queue({
            title: response.data.name,
            videoId: id,
            url: 'https://vimeo.com/' + id,
            userComment: info.userComment,
            description: cutDescription(response.data.description),
            createdBy: response.data.user.name,
            submittedBy: info.submittedBy,
            dateSubmitted: info.dateSubmitted,
            linkType: provider,
            thumbnail: videoThumbnail,
            dateCreated: response.data.created_time,
            likes: 0,
            dislikes: 0,
            bookmarked: 0,
            viewCount: 0
          });

          saveVideo.save((err) => console.log(err));
          info.res.status(200).send("Valid video and saved");
        } else {
          info.res.status(200).send("Duration too long");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
