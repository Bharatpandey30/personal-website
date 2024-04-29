import React, { useState } from 'react';
import './form.css';
import insts from '../../assets /img/ins.jpeg';
import x from '../../assets /img/x.png';
import az from '../../assets /img/az.jpeg';
import link from '../../assets /img/link.png';
import bg from '../../assets /img/ff.png';
import gt from '../../assets /img/gt.png';
import axios from 'axios';

function ContactForm() {
  const Style = {
    height: '100%',
    width: '100%',
    display: 'flex',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/submitForm', formData);
      setFormData({
        email: '',
        name: '',
        message: '',
      });
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };
  return (
    <div className="bigCont" style={Style}>
      <div className='formCont'>
        <h1>Get in touch</h1>
        <form className='contactForm' onSubmit={handleSubmit}>
          <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' />
          <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' />
          <textarea id='message' name='message' value={formData.message} onChange={handleChange} placeholder='Your Message'></textarea>
          <button type='submit' >Send</button>
        </form>
      </div>
      <div className='contactLinks'>
        <h3>Connect here with me:</h3>
        <ul>
          <li><a href='https://github.com/yourusername'><img className="il" src={gt} alt="gt" /></a></li>
          <li><a href='https://www.linkedin.com/in/yourusername'><img className="il" src={insts} alt="LinkedIn" /></a></li>
          <li><a href='https://www.instagram.com/yourusername'><img className="il" src={x} alt="Instagram" /></a></li>
          <li><a href='https://twitter.com/yourusername'><img className="il" src={link} alt="Twitter" /></a></li>
          <li><a href='https://azure.microsoft.com/en-us/'><img className="il" src={az} alt="Azure" /></a></li>
        </ul>
      </div>
      <div className='contactInfo'>
        <p>Phone: +1-437-599-6131</p>
        <p>Email: Bharatpandey361.com</p>
      </div>
      <footer className='footer'>
        <p>&copy; 2024 Bharat Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactForm;
