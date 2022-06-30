import React, { Component } from 'react'
// axios is a package which
// send requests to a server to fetch data
import axios from 'axios'
import Countries from './Countries'

class Axios extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data:[]
    }
  }
  
  componentDidMount() {
    const API_KEY_YELP = ''
    const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
    const apiOptions = {
      headers: {
         "Content-Type": "Application/json",
        // Authorization:`Bearer ${API_KEY_YELP}`
      },
    };
    
    axios
      .get(API_URL, {}, apiOptions)
      .then((response) => {
        const {data} = response
        console.log('2. response', data)
        // this.setState({
        //   data: data,
        // }, ()=>  console.log('3. current state', this.state.data))
        // console.log('1. default state', this.state.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }



  render() {
    // console.log('1. default state', data)
    return (
        <div>
            <h1>Fetching Data Using Axios</h1> 
            <p>There are {this.state.data.length} countries in the api</p>
            <Countries countries={this.state.data}/>
            {this.state.data.length > 0 && this.state.data.map((country,i)=> (<p key={i}>{country.capital}</p>))}
        </div>
    )
  }
}

export default Axios