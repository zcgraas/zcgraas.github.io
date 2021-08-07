import React, { Component } from 'react';
import resumeData from '../resumeData';
import '../css/layout.css';
import '../css/default.css';
import '../css/magnific-popup.css';
import '../css/media-queries.css';
import '../css/fonts.css';
import '../js/init';
import img from '../images/profile-pic.jpg';

class About extends Component{
    render() {
        

        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={img} alt=""/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            {resumeData.aboutMe}
                        </p>
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{resumeData.firstName}{" "}{resumeData.lastName}</span>
                                <br></br>
                                <span>
                                    {resumeData.address}
                                </span>
                                <br></br>
                                <span>{resumeData.website}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;