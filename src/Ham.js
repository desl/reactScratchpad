import React, { Component } from 'react';
import './Ham.css';

class Ham extends Component {
	constructor(){
    super();
      this.state= {
	      hamLicense: ""
	    }
	  }

  ComponentWillMount(){
    console.log("Ham will mount");
  }

  componentDidMount(){
    console.log("Mounted");
    fetch('https://callook.info/kk6vny/json')
    .then(results => {
      console.log("results!")
      return results.json();
    }).then(data => {
      console.log("data!!!", data);
      this.setState({hamLicense: data});
    }).catch(err => {
      console.log("error: ",err);
    })
  }

  render() {
    console.log("rendered Ham");
    return (
      <div className="">
      	<h1>This is a thing</h1>
          <p>
            {this.state.hamLicense}
          </p>
      </div>
    );
  }
}

export default Ham;
