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
  }

  componentDidMount() {
    this.updateWeatherData();
  }

  updateWeatherData = async () => {
    axios.get(`https://www.prevision-meteo.ch/services/json/${this.state.cityName}`)
      .then(res => {
        const weatherData = res.data;
        this.setState({
          weatherData: weatherData
        })
      })
      .catch(err => console.error(err))
    }

  handleSearch = (cityName) => {
    this.setCity(cityName);
  }

  setCity(cityName){
    this.setState({ cityName }, () => this.updateWeatherData());
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





