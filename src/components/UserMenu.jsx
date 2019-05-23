import React from 'react';

const UserMenu = ({ userImg, userName }) => (
  <div>
    <img src={userImg} alt={userName} />
    <p>{userName}</p>
  </div>
);

export default UserMenu;
