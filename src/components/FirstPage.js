require('styles/FirstPage.css');

import React from 'react';

class FirstPage extends React.Component {
  render() {
    return (
      <div className="FirstPage">
        第一页
      </div>
    );
  }
}

FirstPage.defaultProps = {
};

export default FirstPage;