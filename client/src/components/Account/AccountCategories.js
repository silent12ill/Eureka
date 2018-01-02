import React, { Component } from 'react';
import { Tabs, Menu, Icon, Row, Col, message } from 'antd';

const AccountCategories = (props) => {
  return (
        <div>
          <h3>This is the Account Categories</h3>
          <h4>User Categories are: </h4>
          <ul> {props.userCategories.map((cat, index)=> {
            return <li key={index}>{cat}</li>
          })
          }
          </ul>

            <h4>Total Categories are: </h4>
            <div>
            {
              props.categoriesKeys.map((catKey,index)=>{
                return(
                  <div>
                  <h4 key={index}> {catKey} </h4>
                    <Row>
                      {
                        props.categoriesObject[catKey].map((subcat,subIndex)=>{
                          return(
                            <Col
                              span={2}
                              onClick={props.clicked.bind(this,subcat)}
                              key={subIndex * 10}>
                              {subcat}
                            </Col>
                            )
                        })
                      }
                    </Row>
                  </div>
                  )
              })
            }
            </div>
        </div>

    )
}
          // <button onClick={}> Update Categories </button>

export default AccountCategories;
