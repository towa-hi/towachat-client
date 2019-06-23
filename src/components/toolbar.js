import React, {Component} from 'react';

const Toolbar = props => (
  <header className='Toolbar'>
    <nav className='ToolbarNav'>
      <div></div>
      <div className='ToolbarLogo'>
        <a href='/'>the logo</a>
      </div>
      <div className='toolbarNavItems'>
        <ul>
          <li>
            <a href='/'>Products</a>
          </li>
          <li>
            <a href='/'>Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)


export default Toolbar;
