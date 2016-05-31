require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/fullpage.css');

import React from 'react';
import FirstPage from 'components/FirstPage';
import SecondPage from 'components/SecondPage';
import ThirdPage from 'components/ThirdPage';
import FourPage from 'components/FourPage';
import FivePage from 'components/FivePage';



class AppComponent extends React.Component {
  render() {
    return (
	    <div id="sectionContent" className="fp-section-content">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourPage />
        <FivePage />
    </div>
    );
  }
}

AppComponent.defaultProps = {
};
export default AppComponent;