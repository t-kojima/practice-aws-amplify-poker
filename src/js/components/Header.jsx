import React from 'react';

export default props => (
  <header>
    <nav className="level">
      <div className="level-left">
        <div className="level-item neon small pink">
          電<span>腦紙牌</span>遊戲
          {/* <span>視頻撲克</span> */}
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          username
          <button type="button" className="nes-btn is-error">logout</button>
        </div>
      </div>
    </nav>
  </header>
);
