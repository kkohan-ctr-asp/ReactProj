import React from 'react';

const Logo = ({ width = 60, height = 60, logoImage = '' }) => (
  <img src={logoImage} alt="app logo" width={width} height={height} />
);

export default Logo;
