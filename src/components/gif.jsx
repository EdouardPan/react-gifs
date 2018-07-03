import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectFct) {
      this.props.selectFct(this.props.id);
    }
  }


  render() {
    return(
        <img className="gif" src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`} alt="" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
