import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGif: "1Ai7bJyDcjAOvEnx4W"
    };
  }

  handleChange = (event) => {
    giphy('IB66I4hTqY0hYMI1p1sLgHTFhlCiJ448').search({ q: event.target.value, limit: 10})
      .then(response => {
        this.setState( {gifs: response.data} );
    });
  }

  selectGif = (id) => {
    this.setState({selectedGif: id});
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <Search refresh = {this.handleChange} />
          <div className="selected-gif">
            <Gif id = {this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectFct = {this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
