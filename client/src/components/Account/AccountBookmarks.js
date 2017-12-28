import React, { Component } from 'react';

const fakeUserInfo = {
    userName: 'hello@world',
    fakeUserCats: ['catA', 'catB', 'catC'],
    fakeUserBookmarks: ['vidA', 'vidB', 'vidC']
};


const AccountBookmarks = (props) => {
  return (
        <div>
          <h3>This is the Account Bookmarks</h3>
          <h4>User Bookmarks are: </h4>
          <ul> {fakeUserInfo.fakeUserBookmarks.map((name)=> {
            return <li>{name}</li>
          })
          }</ul>

        </div>
    )
}

export default AccountBookmarks;