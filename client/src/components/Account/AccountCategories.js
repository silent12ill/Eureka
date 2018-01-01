import React, { Component } from 'react';

const AccountCategories = (props) => {
  return (
        <div>
          <h3>This is the Account Categories</h3>
          <h4>User Categories are: </h4>
          <ul> {props.userCategories.map((cat, index)=> {
            return <li key={index}>{cat}</li>
          })
          }</ul>

            <h4>Total Categories are: </h4>
          <ul> {props.allCategories.map(
            (cat, index)=> {
            return <li key={index}>{cat}</li>}
            )}
          </ul>

        </div>

    )
}

export default AccountCategories;
