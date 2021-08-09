import React from 'react';
import './About.css'

function About(props) {
  console.log(props);
  return (
    <div className = "about__container">
      <span>
        <p>자세히 보아야</p>
        <p>예쁘다</p><br></br>    
        <p>오래 보아야</p>
        <p>사랑스럽다</p><br></br>
        <p>너도 그렇다.</p><br></br>
      </span>
      <span>- 나태주, '풀꽃'</span>
    </div>
  );
}

export default About;