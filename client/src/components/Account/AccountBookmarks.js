import React, { Component } from 'react';
import BookmarkCard from './BookmarkCard';
import { Icon } from 'antd';

const AccountBookmarks = (props) => {
  return (
    <div>
      <h3>Bookmarks:</h3>
      { props.bookmarks.length !== 0 ? (
        props.bookmarks
            .map((bookmark) => <BookmarkCard bookmark={bookmark} key={ bookmark.videoId } />)
        ) : (
          <div className="noBookmarksMessage">
            <h3>You do not currently have any bookmarks.</h3>
            Look for the <Icon type="book" style={{ fontSize: 25 }} /> icon on your favorite videos to bookmark them.  They will then be available here for you to rewatch!
          </div>
        )
      }
    </div>
    )
}


export default AccountBookmarks;