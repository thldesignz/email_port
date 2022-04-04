import React, { Component } from "react";
import { Link } from 'react-router-dom';
const Portfolio_image = <img src="/assets/images/portfolio/email1.png" alt="email 1" />;
const Portfolio_image1a = <img src="/assets/images/portfolio/1a.png" alt="email 1" />;
const Portfolio_image1b = <img src="/assets/images/portfolio/1b.png" alt="email 1" />;
const Portfolio_image1c = <img src="/assets/images/portfolio/1c.png" alt="email 1" />;
const Portfolio_image2 = <img src="/assets/images/portfolio/email2.png" alt="transactional email" />;
const Portfolio_image2a = <img src="/assets/images/portfolio/2a.png" alt="transactional email" />;
const Portfolio_image2b = <img src="/assets/images/portfolio/2b.png" alt="transactional email" />;
const Portfolio_image2c = <img src="/assets/images/portfolio/2c.png" alt="transactional email" />;
const Portfolio_image3 = <img src="/assets/images/portfolio/email3.png" alt="fenty email" />;
const Portfolio_image3a = <img src="/assets/images/portfolio/3a.png" alt="fenty email" />;
const Portfolio_image4 = <img src="/assets/images/portfolio/portfolio-7.jpg" alt="React Creative Agency" />;
const Portfolio_image5 = <img src="/assets/images/portfolio/portfolio-8.jpg" alt="React Creative Agency" />;
const Portfolio_image6 = <img src="/assets/images/portfolio/portfolio-9.jpg" alt="React Creative Agency" />;

export const PortfolioListContent = [
    {
        disImage: Portfolio_image2,
        image: [
            
            Portfolio_image2a,
            Portfolio_image2b,
            Portfolio_image2c
        ],
        type: 'Email Development',
        title: 'Transactional Email',
        disTitle: 'Email',
        disDescription: 'Transactional Email',
        description: 'This is an example of a transactional email that i created. This email is created with HTML and CSS. This email is fully responsive and was tested using limtmus. It displays correctly across all major email clients. ',
        id: '2',
        datee: '10 Aug, 2021',
        siteUrl: 'https://hungry-euclid-5efafb.netlify.app/',
        detail: 'What was used in this project',
        tags: [
                'HTML',
                'CSS',
                'VS Code',
                'Litmus'
        ]

    },
    {
        disImage: Portfolio_image,
        image: [
            Portfolio_image1a,
            Portfolio_image1b,
            Portfolio_image1c,
        ],
        type: 'Email Development',
        title: 'Promotional Email',
        disTitle: 'Email',
        disDescription: 'Promotional Email',
        description: 'Before the email was just plain text, no images just text and links. So i offered to redo the email so that when customers open it it its more appealing and you may get more clicks. The color scheme is the same color scheme from his website so the brand and color schemes flows together. I added his logo and as well as a image. I coded everything in HTML and CSS and it is fully responsive. ',
        id: '1',
        datee: '30 Sept, 2021',
        siteUrl: 'https://stupefied-turing-9892ce.netlify.app/',
        detail: 'What was used in this project',
        tags: [
                'HTML',
                'CSS',
                'VS Code',
                'Litmus',
                'Photoshop'
        ]
    },
    {
        disImage: Portfolio_image3,
        image: [
            Portfolio_image3a,
        ],
        type: 'Email Development',
        title: 'Email',
        disTitle: 'Email',
        disDescription: 'Promotional Email',
        description: 'This is an example of a promotional email that i created. This email is created with HTML and CSS. This email is fully responsive and was tested using limtmus. It displays correctly across all major email clients. ',
        id: '3',
        datee: '29 Sept, 2021',
        siteUrl: 'https://musing-clarke-ae9222.netlify.app/',
        detail: 'What was used in this project',
        tags: [
                'HTML',
                'CSS',
                'VS Code',
                'Litmus',
        ]

    },
    {
        disImage: Portfolio_image4,
        type: 'Web Design',
        title: 'Email',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        id: '4'
    },
    {
        disImage: Portfolio_image5,
        type: 'Application',
        title: 'Web Application',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        id: '5'
    },
    {
        disImage: Portfolio_image6,
        type: 'Photoshop',
        title: 'Photo Editing',
        description: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit.',
        id: '6'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`im_portfolio ${styevariation}`}>
                            <div className="thumbnail_inner">
                                <div className="thumbnail">
                                    <Link to={"/portfolio-details/"+value.id}>
                                        {value.disImage}
                                    </Link>    
                                </div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <div className="portfolio_heading">
                                        <div className="category_list">
                                            <Link to={"/portfolio-details/"+value.id}>{value.category}</Link>
                                        </div>
                                        <h4 className="title"><Link to={"/portfolio-details/"+value.id}>{value.disTitle}</Link></h4>
                                    </div>
                                    <div className="portfolio_hover">
                                        <p>{value.disDescription}</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="transparent_link" to={"/portfolio-details/"+value.id}></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;