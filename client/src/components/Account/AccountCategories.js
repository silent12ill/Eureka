import React, { Component } from 'react';

const fakeUserInfo = {
    userName: 'hello@world',
    fakeUserCats: ['catA', 'catB', 'catC'],
    fakeUserBookmarks: ['vidA', 'vidB', 'vidC']
};

const fakeCats = {
    fakeTotalCats: ['catD', 'catE', 'catF']
}

const AccountCategories = (props) => {
  return (
        <div>
          <h3>This is the Account Categories</h3>
          <h4>User Categories are: </h4>
          <ul> {fakeUserInfo.fakeUserCats.map((cat)=> {
            return <li>{cat}</li>
          })
          }</ul>

            <h4>Total Categories are: </h4>
          <ul> {fakeCats.fakeTotalCats.map(
            (cat)=> {
            return <li>{cat}</li>}
            )}
          </ul>

        </div>

    )
}

export default AccountCategories;
