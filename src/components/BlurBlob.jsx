// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  // Destructure position and size with default values
  const { top, left ,right} = position
  const { width, height } = size 

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        right: right,
        width: width,
        height: height,
        transform: 'translate(-40%, -40%)',
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animation-blob"
      ></div>
    </div>
  );
};

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string, 
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
