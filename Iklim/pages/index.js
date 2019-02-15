import React, { Component } from 'react'
import axios from 'axios';
import Head from '../components/Head'
import Table from '../components/Table'

class Index extends Component {
  constructor() {
    super()

    this.state = {
      data: null,
      loading: true,
      error: null,
      selectedCity: ""
    }

    this.getWeatherData = this.getWeatherData.bind(this)
  }

  getWeatherData(event) {
    this.setState({selectedCity: event.target.value})

    axios.get('http://api.openweathermap.org/data/2.5/forecast?&q=' + event.target.value + '&mode=json&units=metric&cnt=5&appid=0459756fead5701bf858c244593f1a7b')
      .then(result => this.setState({
        data: result.data,
        loading: false
      }))
      .catch(error => this.setState({
        error,
        loading: false
      }))
  }

  render() {
    return(
      <div>
        <Head />
        <div className="container"><br />
          <select 
            className="custom-select"
            value={this.state.selectedCity}
            onChange={this.getWeatherData}>
          >
            <option value={''}>Choose a City</option>
            <option value={'Jakarta'}>Jakarta</option>
            <option value={'Singapore'}>Singapore</option>
            <option value={'Bangkok'}>Bangkok</option>
          </select>

          <Table data={this.state.data} />
        </div>
      </div>  
    )
  }

}

export default Index