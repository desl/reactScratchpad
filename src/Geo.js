import React, { Component } from 'react';
import googleMapsApiKey from './API_key.js'

class Geo extends Component {
	constructor(){
    super();
      this.state= {
	      formattedAddress: "",
        submittedAddress: "",
        formValue: "Exploratorium"
	    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange(event) {
    this.setState({formValue: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.formValue);
    event.preventDefault();
    console.log("submit got the address", this.state.formValue);

    this.setState({submittedAddress: this.state.formValue});
    this.getFormattedAddress(this.state.formValue);
  }

  getFormattedAddress(address){
    
    const apiKey = googleMapsApiKey;
    // Get your own key and set apiKey to it! (remove the import in line 2)
    // https://developers.google.com/maps/documentation/javascript/get-api-key

    const addressQuery = '?address=';
    const keyQuery = '&key=';
    const url = 'https://maps.googleapis.com/maps/api/geocode/json' + addressQuery + address + keyQuery + apiKey;

    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log("data!!!", data.results);
      this.setState({formattedAddress: data.results[0].formatted_address});
    }).catch(err => {
      console.log("error: ", err);
    })
  }

  render() {
    return (
      <div className="">
        <h1>Google Maps Geocoder Example</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Address: <textarea value={this.state.formValue} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
          <h2>{this.state.submittedAddress}</h2>
          <p>
            {this.state.formattedAddress}
          </p>
      </div>
    );
  }

  componentDidMount(){
    this.getFormattedAddress(this.state.formValue);
  }
}

export default Geo;