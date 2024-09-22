import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>AULToolBox</h1>
      </div>
      <div className="ad-banner">
        {/* 这里是广告区域或色带分割 */}
        <div className="color-band"></div>
      </div>
    </header>
  );
}

export default Header;
