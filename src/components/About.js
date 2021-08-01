import React, { useEffect } from 'react';
import Typical from 'react-typical';
import SeeMore from './SeeMore';
import microphone from '../img/reallyGoodMicBlackened.jpg'


const About = () =>{

 const styles = {
     container: {
         backgroundImage: `url(${microphone})`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         width: '100vw',
         height: 'auto'
     },

 };


	return(

		<div style={styles.container } >
<div className="about" id="about">
<div className="container">
<div className="flex-row">
                    <img src="assets/imgs/anotherPossibleAvatar.jpg"  className="me my-5" alt="Avatar pic" />
                      </div>
                       
                      <div className="flex-row">

                    <h1>Hi, I am Wilson Horrell.</h1>
                    </div>
                    
                    <div className="flex-row">
                    
                    <h2>I'm a{' '}
                    <Typical
steps={["", 2000,"full-stack developer.", 2000, "husband.", 2000, "father.", 2000,  "MERN stack enthusiast.", 2000,  "passionate programmer.", 2000]}
loop="1"
wrapper="b"
/>  
</h2>
                    </div>

<SeeMore />
    
                    
                </div>
                </div>

                </div>
		)
}

export default About