import React, { Component } from 'react';
import styles from './Game.module.scss';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Stopwatch from 'statman-stopwatch';

class Game extends Component {
  state = { accuracy: 0, counter: 0, dialogOpen: true, randomTile: 0, randomTimeout: 0, totalTime: 0 };

  stopwatch = new Stopwatch();

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
    this.highlightTile();
  }

  highlightTile = () => {
    const randomTile = Math.floor(Math.random() * 12) + 1;
    const randomTimeout = (Math.floor(Math.random() * 5) + 1)*1000;
    setTimeout(() => {
      this.setState((state) =>{
        return {randomTile: randomTile, randomTimeout: randomTimeout, counter: state.counter + 1 }
      });
      this.stopwatch.start();
    }, randomTimeout);
  }

  tileClickHandler = (index) => {
    let correct = 0;
    const reactionTime = this.stopwatch.stop();
    this.stopwatch.reset();
    if (index === this.state.randomTile) {
      correct = 1;
    }
    this.setState((state) => {
      return {
        accuracy: state.accuracy + correct,
        randomTile: 0,
        totalTime: state.totalTime + reactionTime
      }
    }, () => {
      if (this.state.counter < 7) {
        this.highlightTile();
      } else {
        this.props.completed(this.state);
      }
    });
  }

  render() {
    let tileClasses = [styles.tile]
    let body = [];
    for (let i = 1; i <= 12; i += 1) {
      const classes = [...tileClasses];
      if (i === this.state.randomTile) {
        classes.push(styles.active);
      }
      body.push((<div className={classes.join(' ')} key={i} onClick={this.tileClickHandler.bind(this, i)}></div>));
    }

    return (
      <div className={styles.wrapper}>
        {body}
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Rules"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Tap the red tiles as soon as they appear. Press OK when you are ready.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Game;
