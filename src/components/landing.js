import React from 'react';

const landingStyle = {
  width: '100%',
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  paddingTop:"60px",
  alignItems: 'center',
  paddingLeft:"10px",
  position: 'relative',
};

const textContainerStyle = {
  background: 'transparent',
  position: 'relative',
};

const headingStyle = {
  color: 'black',
  fontSize: '2rem',
  fontFamily: 'Your Sexy Font',
};

const buttonStyle = {
  color: 'black',
  fontSize: '2.5rem',
  alignItems:"center",
  fontFamily: 'Your Sexy Font',
  backgroundColor: 'transparent',
  border: '2px solid black',
  padding: '10px 20px',
  borderRadius: '10px',
  marginTop: '20px',
  cursor: 'pointer',
};

const Landing = ({ onGetStarted }) => {
  return (
    <div style={landingStyle}>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}> <span style={{fontSize:"120px"}}>Manage</span> Your <span style={{fontSize:"120px"}}>Tasks</span></h1>
      
      </div>
      <button style={buttonStyle} onClick={onGetStarted}>Get Started</button>
    </div>
  );
};

export default Landing;
