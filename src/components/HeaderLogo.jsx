import React from 'react';

const HeaderLogo = ({ width, height, logoImage }) => (
  <div>
    <img src={logoImage} alt="" width={width} height={height} />
  </div>
);

export default HeaderLogo;
