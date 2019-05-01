import React from 'react';

export default props => (
  <main>
    <div>
      <table className="table is-fullwidth">
        <tbody>
          <tr>
            <td>Royal St Flash</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>St Flash</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Four Card</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
      This container is <strong>centered</strong> on desktop.
      <div className="hands columns is-mobile">
        {[1, 2, 3, 4, 5].map(i => (
          <div className="column card-frame" key={i}>
            <div className="card-content">
              <div className="card-index left">
                <span>K</span>
              </div>
              <div className="card-suit">
                <span className="club" />
              </div>
              <div className="card-index right">
                <span>K</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);
