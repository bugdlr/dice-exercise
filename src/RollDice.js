import React, { Component } from 'react';
import Die from './Die';
import './Die.css'

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor (props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      areRolling: false
    };
  }

  roll = () => {
    const newDie1 = Math.floor(Math.random() * 6);
    const newDie2 = Math.floor(Math.random() *6);

    this.setState({
      die1 : this.props.sides[newDie1],
      die2 : this.props.sides[newDie2],
      areRolling: true
    });

    setTimeout(() => {
      this.setState({ areRolling: false });
    }, 800);
  }

  render() {
    return (
      <div>
        <Die face={this.state.die1} areRolling={this.state.areRolling}/>
        <Die face={this.state.die2} areRolling={this.state.areRolling}/>
        <button onClick={this.roll} disabled={this.state.areRolling}>
        {this.state.areRolling ? "Rolling..." : "Roll Dice"}</button>
      </div>
    )
  }
}

export default RollDice;
