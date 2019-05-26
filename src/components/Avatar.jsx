import React from 'react';

const Avatar = ({ width = 60, height = 60, logoImage = '' }) => (
  <img
    className="Avatar"
    src={logoImage}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
