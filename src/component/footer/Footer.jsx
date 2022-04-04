import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
const logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area footer-style-01 bg_color--6">
                    {/* Start Footer Area  */}
                    <div className="footer-wrapper ptb--70">
                        <div className="container">
                            <div className="row">

                                {/* Start Single Widget  */}
                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt_md--40 mt_sm--40 ">
                                    <div className="footer-link d-flex  justify-content-center" >
                                
                                        <div className="social-share-inner mt--20">

                                            <ul className="social-share social-style--2 d-flex justify-content-center liststyle">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                            <div className="ft-text">
                                        <p>Copyright © 2022 All rights reserved.</p>
                                    </div>
                                        </div> 
                                    </div>
                                </div>
                                {/* End Single Widget  */}
                            </div>
                        </div>
                    </div>
                    {/* End Footer Area  */}
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;