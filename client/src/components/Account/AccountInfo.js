import React, { Component } from 'react';

const AccountInfo = (props) => {
  return (
        <div className='accountInfo'>
          <h3>This is the Account Info for: </h3>
          <h4>{props.user}</h4>
          <h2> Hello and welcome to mindfeed! </h2>
            <h3> You have watched ___ number of videos </h3>
            <h3> You have bookmarked ___ number of videos </h3>
          <h1> The more you use and bookmark, the better your MindFeed will get! </h1>

        </div>

    )
}

export default AccountInfo;