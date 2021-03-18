import React, { Component } from 'react';
import resumeData from '../resumeData';
import '../css/layout.css';
import '../css/default.css';
import '../css/magnific-popup.css';
import '../css/media-queries.css';
import '../css/fonts.css';
import '../js/init';

class Footer extends Component {
	render() {
		return (
		    <footer>
			<div className="row">
				<div className="twelve columns">
					<ul className="social-links">
                        {
                            resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                                return(
						            <li>
					                    <a href={item.url} target="_blank">
		                                    <i className={item.className}></i>
                                        </a>
                                    </li>
                                )
                            }
                        )
                    }
                    </ul>
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open" />
                    </a>
                </div>
            </div>
        </footer>
     );
    }
}

export default Footer;