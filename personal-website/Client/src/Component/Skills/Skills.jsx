import React, { useState } from 'react';
import './Skills.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import meter1 from '../../assets /img/meter1.svg';
import meter2 from '../../assets /img/meter2.svg';
import meter3 from '../../assets /img/meter3.svg';

function Skills() {
  const [slidePosition, setSlidePosition] = useState(0);

  const handleRightClick = () => {
    const newPosition = slidePosition + 1;
    if (newPosition < 3) {
    setSlidePosition(newPosition);
    }
    else {
        setSlidePosition(0)
    }
  };

  const handleLeftClick = () => {
    const newPosition = slidePosition - 1;
    setSlidePosition(newPosition);
    if (newPosition > -3) {
        setSlidePosition(newPosition);
        }
        else {
            setSlidePosition(0)
        }
  };

  return (
    <div className='skillsContainer'>
      <div className='text'>Skills</div>
      <div className='img'>
        <KeyboardDoubleArrowLeftIcon
          onClick={handleLeftClick}
          className={`leftArrow ${slidePosition > 0 ? 'swipeRight' : 'swipeLeft'}`}
          style={{ fontSize: '4em' }}
        />
        <div className='imgWrapper' >
          <div className='imgBlock'>
            <img className='Img1' style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={meter1} alt='Image' />
            <span style={{ transform: `translateX(-${slidePosition * 150}%)` }}>Front End Development</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1' style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={meter2} alt='Image' />
            <span style={{ transform: `translateX(-${slidePosition * 150}%)` }}>Full stack Development</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={meter3} alt='Image' />
            <span style={{ transform: `translateX(-${slidePosition * 150}%)` }}> Web Development</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={meter3} alt='Image' />
            <span style={{ transform: `translateX(-${slidePosition * 150}%)` }}> Mern Stack</span>
          </div>
          <div className='imgBlock'>
            <img className='Img1'style={{ transform: `translateX(-${slidePosition * 150}%)` }} src={meter3} alt='Image' />
            <span style={{ transform: `translateX(-${slidePosition * 150}%)` }}>Data analyst</span>
          </div>
        </div>
        <KeyboardDoubleArrowRightIcon
          onClick={handleRightClick}
          className={`rightArrow ${slidePosition < 2 ? 'swipeRight' : 'swipeLeft'}`}
          style={{ fontSize: '4em' }}
        />
      </div>
    </div>
  );
}

export default Skills;
