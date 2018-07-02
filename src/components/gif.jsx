import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return(
        <img className="gif" src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`} alt=""/>
    );
  }
}

export default Gif;
