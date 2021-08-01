import React from 'react';
import { appInfo } from '../utils/helpers';
import slackAttempt from './videos/slack_app_movie_converted.mp4';
import swiftAndSwole from './videos/swift_and_swole.mp4';


const WebApps = () =>{
	return (
<div className="container" id="web-apps">
<h2 className="flex-row my-5">Web Apps</h2>
<hr className="rounded" />
<div className="box my-5">
                    <a href="https://www.lhrlapp.com/" className="apps">
                        <br />
                        <h4 className="flex-row"> LHRL® Slack App</h4>
                        
                    </a>
                    <div className="flex-row">
                    	<video autoPlay loop muted playsInline>
                        <source src={slackAttempt} type="video/mp4" />
                        </video>
                    </div>
                    <br />
                     <p className="descriptions">
                   Slack app using using Node, React, MongoDB and Express which will allow users to create and record workouts, signup for programs, keep track of weekly goals, and interact with Strava's api to retrieve recent workouts. Plan to make available to all Slack workspaces and have the ability to compare activities.
                    </p>
                    <div className="flex-row">
                    <a href="https://github.com/BigPhatNerd/slack_ngrok"><img className="git" src="assets/imgs/GitHub-Mark-64px.png" alt="github icon" />
                        
                        <p className="git-text">
                           Check out my code
                        </p>
                    </a>
                    </div>
                </div>
                <div className="box my-5">
                    <a href="https://swift-swole.herokuapp.com/" className="apps">
                        <br />
                        <h4 className="flex-row"> LHRL® Swift & Swole Event Registration</h4>
                        
                    </a>
                    <div className="flex-row">
                        <video autoPlay loop muted playsInline>
                        <source src={swiftAndSwole} type="video/mp4" />
                        </video>
                    </div>
                    <br />
                     <p className="descriptions">
                   Event Registration and searchable/scrolling scorecar using Node, React, MongoDB and Express which will allow users to create and record workouts, signup for programs, keep track of weekly goals, and interact with Strava's api to retrieve recent workouts. Plan to make available to all Slack workspaces and have the ability to compare activities.
                    </p>
                    <div className="flex-row">
                    <a href="https://github.com/BigPhatNerd/swift_n_swole"><img className="git" src="assets/imgs/GitHub-Mark-64px.png" alt="github icon" />
                        
                        <p className="git-text">
                           Check out my code
                        </p>
                    </a>
                    </div>
                </div>
{ appInfo.map(app =>(
 <div className="box my-5" key={app.site}>
                    <a href={app.site} className="apps">
                        <br />
                        <h4 className="flex-row"> {app.name}</h4>
                        <img src={app.image} className="full-width" alt="screenshots of projects" />
                       
                    </a>
                    <br />
                     <p className="descriptions">
                   {app.description}
                    </p>
                    <div className="flex-row">
                    <a href={app.github}><img className="git" src={app.gitIcon} alt="github icon"/>
                        
                        <p className="git-text">
                           {app.signOff}
                        </p>
                    </a>
                    </div>
                </div>
           )) }
            </div>


		)
}



export default WebApps
