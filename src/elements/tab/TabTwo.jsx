import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProgressBar } from 'react-bootstrap';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        // tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        {/* <Tab>{tab2}</Tab> */}
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <div className={`rn-progress-bar progress-bar--1 mt_dec--10`}>
                                                <div className="single-progress">
                                                    <h6 className="title">HTML/CSS/JS</h6>
                                                    <ProgressBar now={100} />
                                                    <span className="label">100%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Email Testing</h6>
                                                    <ProgressBar now={100} />
                                                    <span className="label">100%</span>
                                                </div>

                                                <div className="single-progress">
                                                    <h6 className="title">Responsive Design</h6>
                                                    <ProgressBar now={100} />
                                                    <span className="label">100%%</span>
                                                </div>

                                                {/* <div className="single-progress">
                                                    <h6 className="title">Development</h6>
                                                    <ProgressBar now={80} />
                                                    <span className="label">80%</span>
                                                </div> */}
                                            </div>
                                        </div>
                                    </TabPanel>


                                    {/* <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel> */}



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Front-End Web Developer<span> - Freelance</span></a> 2018 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Front-end Developer<span> - EZ-Poltix</span></a> 2021 - current
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Graphic Design - with specialization in web and multimedia<span> - Rasmussen College, Ocala, FL</span></a> 2018
                                               </li>
                    
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;