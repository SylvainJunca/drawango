import React, { Component } from "react";
import Canvas from './canvas'
import Timer from './desktopTimerFooter';

class DesktopGuessingScreen extends Component {

  render() {
    return (
      <div>
        <p> What do you think this is? Submit your guess</p>
        <Canvas gameData={this.props.gameData} />
        <Timer gameData={this.props.gameData} changeGameStage={this.props.changeGameStage} resetTimer={this.props.resetTimer} stage={"votingStage"}/>
      </div>
    )
  }
}

export default DesktopGuessingScreen;