import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import './styles.css';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy logo"/>
          <h2>Your Platform for Online Learning</h2>
        </div>

        <img
          src={landingImg} 
          alt="Study platform"
          className="hero-image"
          />

          <div className="buttons-container">
            <Link to='/study' className="study">
              <img src={studyIcon} alt="Study"/>
              Student
            </Link>

            <Link to='/classes' className="give-classes">
              <img src={giveClassesIcon} alt="Teach"/>
              Teacher
            </Link>    
          </div>

          <span className="total-connections">
            Total of {totalConnections} connections already realized
            <img src={purpleHeartIcon} alt="Purple heart"/>
          </span>

      </div>
    </div>
  )
}

export default Landing;