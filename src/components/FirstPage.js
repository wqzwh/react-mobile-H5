import React from 'react';

class FirstPage extends React.Component {
  render() {
    return (
      <div className="fp-section wqfirstpage">
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

FirstPage.defaultProps = {
};

export default FirstPage;