import React from 'react';

export default function MenuToggleHeader({
  handleMenuToggle,
}) {
  return (
    <div className="bars" onClick={handleMenuToggle}>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </div>
  );
}
