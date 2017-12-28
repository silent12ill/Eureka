import React, { Component } from 'react';

const fakeUserInfo = {
    userName: 'hello@world',
    fakeUserCats: ['catA', 'catB', 'catC'],
    fakeUserBookmarks: ['vidA', 'vidB', 'vidC']
};

const AccountInfo = (props) => {
  return (
        <div>
          <h3>This is the Account Info for: </h3>
          <h4>{fakeUserInfo.userName}</h4>
        </div>

    )
}

export default AccountInfo;