import React, { Component } from 'react';
import BookmarkCard from './BookmarkCard';
import { Card } from 'antd';



const SampleDataArray = [
{
    "videoId" : "oKjqOK-HOX4",
    "url" : "https://www.youtube.com/watch?v=oKjqOK-HOX4",
    "linkType" : "YouTube",
    "title" : "How to Learn JavaScript in 2017 - My Programming Mentality",
    "description" : "Enjoyed my video? Leave a like!\nGitHub Link: https://github.com/maxg203\nPersonal Website: http://maxgoodridge.com",
    "likes" : 3,
    "dislikes" : 16,
    "viewCount" : 1,
    "bookmarked" : 0,
    "category" : "Technology",
    "subcategory" : "Programming",
    "thumbnail" : "https://i.ytimg.com/vi/oKjqOK-HOX4/mqdefault.jpg",
    "createdBy" : "Max Goodridge",
    "dateCreated" : "2017-01-05T18:00:02.000Z",
    "submittedBy" : "b",
    "dateSubmitted" : "2018-01-09",
    "__v" : 0
},
{
    "videoId" : "20142036",
    "url" : "https://vimeo.com/20142036",
    "linkType" : "Vimeo",
    "title" : "Creative JavaScript Training",
    "description" : "Some of the JavaScript effects from my recent Brighton training course. \n\nFor more information go to http://seb.ly/training\n\nMusic is Crayon by Caribou \n\niTunes : http://t.co/hEOsC73\nAmazon : http://www.amazon.co.uk/Crayon/dp/B003DITGX8/ref=sr_1_1?ie=UTF8&s=dmusic&qid=1298150012&sr=8-1",
    "likes" : 0,
    "dislikes" : 0,
    "viewCount" : 1,
    "bookmarked" : 0,
    "category" : "Technology",
    "subcategory" : "Programming",
    "thumbnail" : "https://i.vimeocdn.com/portrait/3232118_72x72",
    "createdBy" : "Seb Lee-Delisle",
    "submittedBy" : "b",
    "dateSubmitted" : "2018-01-10",
    "__v" : 0
},
{
    "videoId" : "x2c46nt",
    "url" : "https://dailymotion.com/video/x2c46nt",
    "linkType" : "DailyMotion",
    "title" : "Obama Jumps in to Hour of Code Event With a Little JavaScript",
    "likes" : 0,
    "dislikes" : 0,
    "viewCount" : 1,
    "bookmarked" : 0,
    "category" : "Technology",
    "subcategory" : "Programming",
    "thumbnail" : "http://s1.dmcdn.net/IIc3R/x360-MBn.jpg",
    "createdBy" : "x1awx6l",
    "dateCreated" : "1418084550",
    "submittedBy" : "b",
    "dateSubmitted" : "2018-01-10",
    "__v" : 0
},
{
    "videoId" : "110845548",
    "url" : "https://vimeo.com/110845548",
    "linkType" : "Vimeo",
    "title" : "#JavaScript",
    "description" : "I experimented with using JavaScript-based expressions that referenced markers. Good times!",
    "likes" : 0,
    "dislikes" : 0,
    "viewCount" : 0,
    "bookmarked" : 0,
    "category" : "Technology",
    "subcategory" : "Programming",
    "thumbnail" : "https://i.vimeocdn.com/portrait/16926911_72x72",
    "createdBy" : "Tomilola Adewale",
    "submittedBy" : "b",
    "dateSubmitted" : "2018-01-10",
    "__v" : 0
},
{
    "videoId" : "102553634",
    "url" : "https://vimeo.com/102553634",
    "linkType" : "Vimeo",
    "title" : "Flipping Through JavaScript & jQuery",
    "description" : "Flipping through the new book, \"Javascript & jQuery: Interactive Front-End Web Development,\" by Jon Duckett",
    "likes" : 0,
    "dislikes" : 0,
    "viewCount" : 0,
    "bookmarked" : 0,
    "category" : "Technology",
    "subcategory" : "Programming",
    "thumbnail" : "https://i.vimeocdn.com/portrait/1271322_72x72",
    "createdBy" : "UX Magazine",
    "submittedBy" : "b",
    "dateSubmitted" : "2018-01-10",
    "__v" : 0
}
];

const AccountBookmarks = (props) => {
          console.log("props.bookmarks", props.bookmarks)
  return (
        <div>
          <h3>Bookmarks:</h3>
          {
          	props.bookmarks
          	  .map((bookmark) => <BookmarkCard bookmark={bookmark} key={ bookmark.videoId } />)
            }

          </div>
    )
}

export default AccountBookmarks;


