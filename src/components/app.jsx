import React, { Component } from 'react';

import Search from './search.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {gifs: []};
  }

  updateList = () => {

  }

  render() {
    const gifs = [
      {id: "1Ai7bJyDcjAOvEnx4W"},
      {id: "1Ai7bJyDcjAOvEnx4W"},
      {id: "1Ai7bJyDcjAOvEnx4W"}
    ]

    return(
      <div>
        <div className="left-scene">
          <Search />
          <div className="selected-gif">
            <Gif id = "1Ai7bJyDcjAOvEnx4W"/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
