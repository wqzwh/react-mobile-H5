require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/fullpage.css');

import React from 'react';
import FirstPage from 'components/FirstPage';
import MusicTool from 'components/MusicTool';

class AppComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        planeDisplayed:true,
        musicurl:'../images/1.mp3'
      };
  }
  Mtoggle(e){
    this.setState({
      planeDisplayed: !this.state.planeDisplayed,
    });
    let bgsound=new Audio(this.state.musicurl);
    let M=document.getElementById("M");
    let flag=this.state.planeDisplayed;
    console.log(flag);
    if(flag){
      M.play();
      //bgsound.loop = true;
    }else{
      M.pause();
    }

  }
  render() {
    return (
      <div>
        <MusicTool  Mtoggle={this.Mtoggle}
                    planeDisplayed={this.state.planeDisplayed }/>
  	    <div id="sectionContent" className="fp-section-content">
          <FirstPage />
          <div className="fp-section">2</div>
          <div className="fp-section">3</div>
        </div>
      </div>  
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
