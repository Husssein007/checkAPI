import React from 'react';

const UL = ({ element: { id, name, username, address, email, phone } }) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{username}</li>
      <li>{phone}</li>
    </ul>
  );
};

export default UL;
