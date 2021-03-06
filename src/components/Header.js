import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="flexRow">
      <div className="flexRow">
        <Link to="/">
          <img alt="Narwa11y 'Wally' logo, a rainbow colored narwhal wearing glasses. Its single horn is sparkly." className="logo" src="/narwha11y.png" />
        </Link>
        <h1 className="pageTitle">Narwha11y: Accessibility Assessment Tool<div>beta</div></h1>
      </div>
      <nav className="mainButtons">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="/api/create">New</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
