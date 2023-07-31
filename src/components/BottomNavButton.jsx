import React from 'react';

const BottomNavButton = ({ icon, active, onClick }) => {
  return (
    <button className={active ? 'active' : ''} onClick={onClick}>
      {icon}
    </button>
  );
};

export default BottomNavButton;
