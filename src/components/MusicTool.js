import React from 'react';

class MusicTool extends React.Component {
  render() {
    return (
      <div>
        <div className="webapp-loading">
          <div className="webapp-loading-body">
            <div className="webapp-loading-dian"></div>
            <div className="webapp-loading-pic" data-animation-bubbles="1">
              <img src="img/loading-default.png" />
            </div>
          </div>
        </div>
        <div className={this.props.planeDisplayed?'scene-audio rt play':'scene-audio rt'} data-action="" data-animation-bubbles="1" onClick={this.props.Mtoggle}>
          <div className="scene-audio-pointer" data-animation-bubbles="1"></div>
          <div className="scene-audio-disk" data-animation-bubbles="1"></div>
          <audio id="M" src={this.props.musicurl} controls="controls" onClick={this.props.musicPlay}></audio>
        </div>
        <div className="loading-mask" data-animation-bubbles="1"></div>
      </div>
    );
  }
}

MusicTool.defaultProps = {
};

export default MusicTool;