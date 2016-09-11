require('styles/FirstPage.css');

import React from 'react';

class FirstPage extends React.Component {
  render() {
    return (
        <div className="fp-section">
            <img src="../images/1.jpg" width="100%" height="100%" />
        </div>
    );
  }
}

FirstPage.defaultProps = {
	
};

export default FirstPage;