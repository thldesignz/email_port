import React, { Component,  useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { FiCheck } from "react-icons/fi";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { PortfolioListContent, PortfolioList } from './portfolio/PortfolioList';
const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]



class PortfolioDetails extends Component{
    
    constructor (props) {
        super(props)
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
        // console.warn(props);
        // console.log(this.props.match.params.id )
        // console.log(PortfolioListContent)

    }
    
    openModal () {
        this.setState({isOpen: true})
    }
    
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {PortfolioListContent
                .filter((item) => item.id === this.props.match.params.id)
                .map((item) => {
                   console.log('this is my item', item);
                    
                    return <>
                    {/* Start Breadcrump Area */}
                <div key={item.id} className="rn-page-title-area pt--120 pb--190 pb_md--100 pb_sm--100  bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient">Getting tickets to the big show</h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="row row--35 mb--50">
                                        <div className="col-lg-6">
                                            <div className="inner">
                                                <div className="section-title">
                                                    <h2 className="title"> {item.title} </h2>
                                                    <p className="description mt--30"> {item.description}</p>
                                                </div>
                                                <div className="portfolio-view-list d-flex flex-wrap">

                                                    <div className="port-view">
                                                        <span>Project Types</span>
                                                        <h4> {item.type} </h4>
                                                    </div>

                                                    <div className="port-view">
                                                        <span>Date</span>
                                                        <h4> {item.datee} </h4>
                                                    </div>
                                                </div>
                                                <div className="portfolio-details-btn mt--30">
                                                    <a className="btn-default btn-border" href="/portfolio">Launch Preview</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="portfolio-details-accordion mt_md--40 mt_sm--40">
                                                <div className="inner">
                                                    <div className="section-title">
                                                        <h4 className="title">Details</h4> 
                                                        <p className="description mt--30"> {item.detail} </p>
                                                        <ul className="list-style--1">
                                                            {item.tags.map((tag) => {
                                                                return (
                                                                    <li><FiCheck /> {tag}</li>
                                                                )
                                                            })}
                                                            
                                                        </ul>     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        {/* <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div> */}
                                        {item.image.map((pic) => {
                                            return (
                                                <div className="thumb mb--30">
                                            <img src={pic.props.src} alt="Portfolio Images"/>
                                        </div>
                                        
                                            )
                                        })}
                                        {/* <div className="thumb mb--30">
                                            <img src={item.image.props.src} alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}
                    </>
                    
                })}
                

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />  


            </React.Fragment>
        )
    }
}
export default PortfolioDetails ;
