import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>ポートフォリオ</h3>
      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="/">ホーム</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
