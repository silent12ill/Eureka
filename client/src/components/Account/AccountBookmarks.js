import React, { Component } from 'react';
import BookmarkCard from './BookmarkCard';


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