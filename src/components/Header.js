import React, { Component } from 'react';
import resumeData from '../resumeData';
import '../css/layout.css';
import '../css/default.css';
import '../js/init';
import '../css/magnific-popup.css';
import '../css/media-queries.css';
import '../css/fonts.css';
import '../images/header-background-2.jpg';

class Header extends Component {
        
    render(){
        
        return(
            <React.Fragment>
                <header id="home" className="header-background">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show Navigation">Show Navigation</a>
                        <a className="mobile-btn" href="#" title="Hide Navigation">Hide Navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">Home</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about">About</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume">Resume</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">Works</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">
                                My name is {resumeData.name}.
                            </h1>
                            <h3 style={{color:'#fff', fontFamily: 'sans-serif'}}>
                                I am a {resumeData.role}. {resumeData.roleDescription}
                            </h3>
                            <hr/>
                            <ul className="social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                                        return(
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank">
                                                    <i className={item.className}></i>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle"></i>
                        </a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;