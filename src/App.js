import React from 'react'
import axios from 'axios'
import GetCityForm from './components/GetCityForm'
import Weather from './components/Weather'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      weatherData: null,
      cityName: "Toulon"
    }
    // this.updateWeatherData()
  }

  // updateWeatherData = async () => {

  //   const apiCall = await fetch(`https://www.prevision-meteo.ch/services/json/${this.state.cityName}`)
  //   const weatherData = await apiCall.json()
  //   console.log(weatherData)

  //   this.setState({
  //     weatherData
  //   })
  // }

  componentDidMount() {
    axios.get(`https://www.prevision-meteo.ch/services/json/${this.state.cityName}`)
      .then(res => {
        const weatherData = res.data;
        console.log(weatherData)
        this.setState({
          weatherData: weatherData
        })
      })
      .catch(err => console.error(err))
  }

  setCity(cityName){
    this.setState({ cityName });
    this.updateWeatherData();
  }

  handleSearch(cityName){
    // Update city:
    this.setCity(cityName);
  }

  render() {
    return (
      <div className="App">
        <GetCityForm onSearch={this.handleSearch}/>
        <Weather 
          weatherData={this.state.weatherData}/>
      </div>
    )
  }
}

export default App





