import React, { Component } from 'react';
import { Tabs, Menu, Icon, Row, Col } from 'antd';
import AccountCategoryCard from './AccountCategoryCard';
const TabPane = Tabs.TabPane;

const AccountCategories = (props) => {

  return (
        <div className="accountCategories">
          <h3>This is the Account Categories</h3>
          <h4>User Categories are: </h4>
          <h4>Total Categories are: </h4>
          <h3> Click categories below to update your MindFeed</h3>

            <div>
              <Tabs tabPosition="left">
                {
                  props.categoriesKeys.map((catKey)=>{
                    return (
                      <TabPane tab={catKey} key={catKey}>
                        {props.categoriesObject[catKey].map((subcat)=>{

                          return(
                            <div onClick={props.clicked.bind(this, catKey, subcat)}
                            key={subcat}>
                            <AccountCategoryCard
                              currentUI={props.preferUI[catKey][subcat]}
                              subcategory={subcat} />
                            </div>
                            )
                        })}
                      </TabPane>
                      )
                  })
                }
              </Tabs>
            </div>

        </div>

    )
}
          // <button onClick={}> Update Categories </button>

export default AccountCategories;
                  // <div>
                  // <h4 key={index}> {catKey} </h4>
                  //   <Row>
                  //     {
                  //       props.categoriesObject[catKey].map((subcat,subIndex)=>{
                  //         return(
                  //           <Col
                  //             span={2}
                  //             onClick={props.clicked.bind(this,subcat, catKey)}
                  //             key={subIndex}>
                  //             {subcat}
                  //           </Col>
                  //           )
                  //       })
                  //     }
                  //   </Row>
                  // </div>
