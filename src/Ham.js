import React, { Component } from 'react';
import './Ham.css';

class Ham extends Component {
	constructor(){
    super();
      this.state= {
	      formattedAddress: ""
	    }
	  }

  componentDidMount(){
    console.log("Mounted");

    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=Pantheon,%20San%20Francsco,%20CA&key=AIzaSyAtRIxwlNll1t441LlLKtSGZP2zCerjWgc')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log("data!!!", data.results);
      this.setState({formattedAddress: data.results[0].formatted_address});
    }).catch(err => {
      console.log("error: ",err);
    })
  }

  render() {
    console.log("rendered Ham");
    return (
      <div className="">
      	<h1>Google Maps Geocoder Example</h1>
          <p>
            {this.state.formattedAddress}
          </p>
      </div>
    );
  }
}

export default Ham;
