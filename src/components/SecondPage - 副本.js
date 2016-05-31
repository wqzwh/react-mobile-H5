require('styles/SecondPage.css');

import React from 'react';

class SecondPage extends React.Component {
  render() {
    return (
        <div className="fp-section">
            <div className="fp-slide-wrap">
	            <div className="fp-slide">1</div>
	            <div className="fp-slide">2</div>
	            <div className="fp-slide">3</div>
	            <div className="fp-slide">4</div>
	            <div className="fp-slide">5</div>
            </div>
        </div>
    );
  }
}

SecondPage.defaultProps = {
};
export default SecondPage;