import React from 'react';

export default function Footer() {
  return (
    <div className="footer-container"> 
      <div className="background-box">
        <div className="hours-box">
          Hours
          <br />
          <br />
          M-F: 8AM-5PM
          <br />
          <br />
          S-S: 9AM-5PM
        </div>
        <div className='image-box'></div>
        {/* <img className="image-box" src="" alt="Placeholder" /> */}
        <div className="info-box">
          About Us
          <br />
          <br />
          Contact
          <br />
          <br />
          Location
        </div>
       
      </div>
    </div>
  );
}
