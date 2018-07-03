import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = { highlight: false };
  }

  Highlight = () => {
    this.setState({ highlight: !this.state.highlight });
  }

  classNames() {
    if (this.state.highlight) {
      return "form-search form-control highlight-search";
    }
    return "form-search form-control";
  }

  // classNames() {
  //   let classes = 'form-search form-control';
  //   if (this.state.highlight) {
  //     classes += ' highlight-search';
  //   }
  //   return classes;
  // }

  render() {
    return(
      <input type="text" className={this.classNames()} onChange ={this.props.refresh} onFocus = {this.Highlight} onBlur = {this.Highlight}/>
    );
  }
}

export default Search;
