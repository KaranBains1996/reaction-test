import React, { Component } from 'react';
import Home from './home/Home';
import Game from './game/Game';
import styles from './App.module.scss';

class App extends Component {
  state = { inGame: false };

  startHandler = () => {
    this.setState({
      inGame: true
    });
  }

  render() {
    let AppBody = null;
    if (!this.state.inGame) {
      AppBody = (<Home start={this.startHandler} />)
    } else {
      AppBody = (<Game />)
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
