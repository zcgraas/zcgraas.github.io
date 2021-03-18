import React, { Component } from 'react';
import resumeData from '../resumeData';
import '../css/layout.css';
import '../css/default.css';
import '../css/magnific-popup.css';
import '../css/media-queries.css';
import '../css/fonts.css';
import '../js/init';

class Contact extends Component {
    render() {
        
        return(
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Feel free to conact me for any work or suggestiosn!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eigth columns footer-widgets">
                        <div className="widget">
                            <h4>
                                <i className="fa fa-linkedin"> </i>
                                : @zackarygraas 
                            </h4>
                            <h4>
                                <i className="fa fa-envelope"> </i>
                                : zackary.graas@louisville.edu
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}

export default Contact;