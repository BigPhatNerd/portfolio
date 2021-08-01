import React from 'react';
import { rowOne, rowTwo, rowThree } from '../utils/helpers';

const Tools = () => {

	return (
		<div id="change-background">
		<div className="container-white" id="skills">
<h2 className="flex-row my-5" id="skills-and-tools">Skills & Tools</h2>
		
		<hr className="rounded" />
		    <div className="flex-row">
            
                    <p className="skills-and-tools">
                        Wilson has developed an expertise in the following programming languages and comfort with the following tools.
                    </p>
               
        </div>
        <div className="flex-row">
         
                <div className="icons">
                {rowOne.map((pic, index) =>(
<img src={pic} className="icon" key={index} alt="screenshots of technologies" />
                	))}
    
                </div>
              </div>
              <div className="flex-row">
                    <div className="icons">
                       {rowTwo.map((pic, index) =>(
<img src={pic} className="icon" key={index} alt="screenshots of technologies" />
                	))}
                    </div>
                </div>
                 <div className="flex-row">
         
                <div className="icons">
                {rowThree.map((pic, index) =>(
<img src={pic} className="icon" key={index} alt="screenshots of technologies" />
                	))}
    
                </div>
              </div>
            
        
		</div>
		</div>
		)
}



export default Tools;