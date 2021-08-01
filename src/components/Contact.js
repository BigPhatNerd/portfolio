import React from 'react';

const Contact = () =>{
	return(
<div className="contact-me" id="hire-me">
                <h3 className="contact-headline">Contact</h3>
                <hr className="yellow" />
                <p className="contact-info">
                    Currently entertaining new opportunities. Please contact me via email:
                </p>
                
                    <a href="mailto:wilsonhorrell@gmail.com" className="flex-row">
                        wilsonhorrell@gmail.com
                    </a>
                   <div className="flex-row">
                    <a href="https://github.com/BigPhatNerd"><img className="git" src="assets/imgs/GitHub-Mark-64px.png" alt="github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/wilson-horrell-54167a21/"><img className="icon-linked" src="assets/imgs/linkedin.png" alt="linkedin logo" />
                    </a>
                    </div>
                
            </div>
		)
}

export default Contact;