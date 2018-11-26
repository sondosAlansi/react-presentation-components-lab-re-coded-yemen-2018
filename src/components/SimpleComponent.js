// Code SimpleComponentHere Here
import React, { Component } from 'react';


class SimpleComponent extends Component {

  constructor(){
    super();
    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    if (this.state.mood === "happy"){
      this.setState({
        mood: "sad"
      },console.log(newMood))
    } else {
        this.setState({
          mood: "happy"
        },console.log(newMood))
      }

  }

  render() {
    return <div onClick={this.handleClick} >{this.state.mood}</div>;
  }
}

export default SimpleComponent;
