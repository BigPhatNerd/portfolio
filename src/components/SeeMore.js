import React, { useState, useEffect } from 'react';
import {CSSTransition, TransitionGroup } from 'react-transition-group';


const Example = () =>{
const [isVisible, setVisible] = useState(false);


	return(
		<div>
		<br/>
			<TransitionGroup>
			{console.log("isVisible right here?!!!", isVisible)}
				{ isVisible ?
				<CSSTransition
				timeout={100}
				classNames="bio"
				>
				 <p className="bio"> Wilson Horrell is a professional software developer specializing in full-stack development. 
                    He has extensive experience with the MERN stack and building web applications. Wilson has experience in Ruby on Rails
                    but his passion is rooted in MongoDb, Express, React, and Node.
                    Wilson has owned and operated his own landscape construction 
                    and industrial services business for the last sixteen years.<br />Three years ago, Wilson co-founded  
                    <a href="https://www.liftheavyrunlong.com/" className="contact-link" target="_blank">Lift Heavy Run Long®, llc 
                    </a>which is a community of over 10,000 athletes from all over the world who believe in supporting others in 
                    the world of fitness. Wilson hosts and produces The Lift Heavy Run Long® weekly podcast which has reached as 
                    high as #56 worldwide in the Fitness and Nutrition category on iTunes. Wilson also helps design, build and 
                    maintain the website LiftHeavyRunLong.com where he is also an active blogger.<br />
                    Wilson is highly energetic, extremely motivated and loves working with other people. He looks forward to 
                    taking his skills to a career in web development and being past of a team.
                       <br /> <button onClick={() => setVisible(!isVisible) }>Hide info</button>
                        </p>
					

				</CSSTransition>

				: <button style={{marginBottom: '3rem'}} onClick={() => setVisible(!isVisible) }>Learn More?</button> }
			</TransitionGroup>
			
		</div>)
}


export default Example;