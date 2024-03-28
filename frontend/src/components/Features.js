import React from 'react'

export default function Features() {
  return (
    <div>
      <div id="features" className="features">
        <div className="features__container section">
          <div className="features--heading-text">
            <h2 className="feature--text">Great Features of RupeeWise</h2>
            <p>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt <br />ut labore et dolore magna aliqua.
            Praesent semper feugiat nibh sed. */}
            </p>
          </div>
          <div className="row">
            <div className="row--container">
              <div className="col-1-of-4">
                <div className="card card--1">
                  <div className="card--box">
                    <div className="img--box">
                      <span className="material-symbols-outlined i-monitor">
                        monitoring
                      </span>
                    </div>
                    <div className="card__text">
                      <div className="text--box">
                        <h3>Monitoring</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="card card--2">
                  <div className="card--box">
                    <div className="img--box">
                      <span className="material-symbols-outlined i-table">
                        table_chart
                      </span>
                    </div>
                    <div className="card__text">
                      <div className="text--box">
                        <h3>View in Table</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="card card--3">
                  <div className="card--box">
                    <div className="img--box">
                      <span className="material-symbols-outlined i-transaction">
                        receipt_long
                      </span>
                    </div>
                    <div className="card__text">
                      <div className="text--box">
                        <h3>Transactions</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="card card--4">
                  <div className="card--box">
                    <div className="img--box">
                      <span className="material-symbols-outlined i-insight">
                        insights
                      </span>
                    </div>
                    <div className="card__text">
                      <div className="text--box">
                        <h3>Insights</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}