import React, { Component } from 'react';
import resumeData from '../resumeData';
import '../css/layout.css';
import '../css/default.css';
import '../css/magnific-popup.css';
import '../css/media-queries.css';
import '../css/fonts.css';
import '../js/init';
import '../images/profile-pic.jpg';

class About extends Component{
    render() {
        

        return(
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQFIjlh4XU4iFQ/profile-displayphoto-shrink_200_200/0/1574214004850?e=1621468800&v=beta&t=YGYYIuO7kimufirKku-jz_rOljcRTXywtnl_bNN5vFg" alt=""/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            {resumeData.aboutMe}
                        </p>
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{resumeData.name}</span>
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