import React, { Component } from 'react';
import Home from './home/Home';
import Game from './game/Game';
import Result from './result/Result';
import styles from './App.module.scss';

class App extends Component {
  state = { inGame: 1, score: {} };

  startHandler = () => {
    this.setState({
      inGame: 2
    });
  }

  completedHandler = (score) => {
    this.setState({
      inGame: 3,
      score: score
    });
  }

  render() {
    let AppBody = null;
    if (this.state.inGame === 1) {
      AppBody = (<Home start={this.startHandler} />)
    } else if (this.state.inGame === 2) {
      AppBody = (<Game completed={this.completedHandler} />)
    } else if (this.state.inGame === 3) {
      AppBody = (<Result score={this.state.score} start={this.startHandler} />)
    }
    return (
      <div
        className={styles.App}
        >
        {AppBody}
      </div>
    );
  }
}

export default App;
