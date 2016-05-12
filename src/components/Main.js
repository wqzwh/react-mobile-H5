require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/fullpage.css');

import React from 'react';
// import FirstPage from 'components/FirstPage';

class AppComponent extends React.Component {
  render() {
    return (
	    <div id="sectionContent" className="fp-section-content">
        <div className="fp-section">
            <div className="fp-slide-wrap">
              <div className="fp-slide">1</div>
              <div className="fp-slide">2</div>
              <div className="fp-slide">3</div>
              <div className="fp-slide">4</div>
              <div className="fp-slide">5</div>
            </div>
          </div>
        <div className="fp-section">2</div>
        <div className="fp-section">3</div>
    </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
