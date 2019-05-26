import React from 'react';

const HeaderLogo = ({ width = 60, height = 60, logoImage = '' }) => (
  <img src={logoImage} alt="app logo" width={width} height={height} />
);

export default HeaderLogo;
