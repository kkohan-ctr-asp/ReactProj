import React from 'react';
import style from './Avatar.module.css';

const Avatar = ({ width = 60, height = 60, logoImage = '' }) => (
  <img
    className={style.avatar}
    src={logoImage}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
