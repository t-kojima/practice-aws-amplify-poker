import React from 'react';
import classNames from 'classnames';

const displayNumber = number => ({
  11: 'J',
  12: 'Q',
  13: 'K',
  1: 'A',
}[number] || number);

export default ({ suit, number }) => (
  <div className="card-frame">
    <div className="card-content">
      <div className="card-index left">
        <span>{displayNumber(number)}</span>
      </div>
      <div className="card-suit">
        <span className={classNames(suit)} />
      </div>
      <div className="card-index right">
        <span>{displayNumber(number)}</span>
      </div>
    </div>
  </div>
);
