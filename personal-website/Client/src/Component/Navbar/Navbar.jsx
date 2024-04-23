import React, { useState, useEffect } from 'react';
import { Link, Router } from 'react-router-dom';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState();

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSkillsClick = () => {

    setClicked(true);
    window.scrollTo({ top: 700, behavior: 'smooth' });

  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToEducation = () => {
    window.scrollTo({ top: 1330, behavior: 'smooth' });
  };
  
  const scrolltoExp =()=> {
    window.scrollTo({top:1800, behavior:"smooth"});

  }



  return (
    <div className={`navbarContainer ${scrolled ? 'scrolled' : ''}`}>
      <div className='navRight'>
        <img src='' alt='' />
        <span className='NavItem'>Hi! There</span>
      </div>
      <div className='navleft'>
      <span className='NavItem' onClick={scrollToTop}>Home</span>
        <span className='NavItem' onClick={handleSkillsClick}>Skills</span>   
        <span className='NavItem' onClick={scrollToEducation}>Education</span>
        <span className='NavItem' onClick={scrolltoExp}>Experience</span>
        <span className='NavItem'>Relavant Projects</span>
        <DensitySmallIcon className='navSmall' />
      </div>
    </div>
  );
};

export default Navbar;
