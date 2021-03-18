import React, { Component } from 'react';
import resumeData from '../resumeData';
import '../css/layout.css';
import '../css/default.css';
import '../css/magnific-popup.css';
import '../css/media-queries.css';
import '../css/fonts.css';
import '../js/init';

class Portfolio extends Component {
    render() {
        
        return(
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check out some of my works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" alt="">
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                                    return(
                                        <div className="columns portfolio-items">
                                            <div className="item-wrap">
                                                <a href={item.link} target="_blank">
                                                    <img src={'${item.imgurl}'} className="item-img" />
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;