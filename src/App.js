import React from 'react'
import GetCityForm from './components/GetCityForm'
import Weather from './components/Weather'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      temp: undefined,
      minTemp: undefined,
      maxTemp: undefined,
      condition: ""
    }
    this.getWeatherPromise()
  }

  getWeatherPromise = async () => {

    const apiCall = await fetch(`https://www.prevision-meteo.ch/services/json/Toulon`)
    const weatherData = await apiCall.json()
    console.log(weatherData)

    this.setState({
      city: weatherData.city_info.name,
      country: weatherData.city_info.country,
      icon: weatherData.current_condition.icon_big,
      temp: weatherData.current_condition.tmp,
      minTemp: weatherData.fcst_day_0.tmin,
      maxTemp: weatherData.fcst_day_0.tmax,
      condition: weatherData.current_condition.condition
    })
  }

  render() {
    return (
      <div className="App">
        <GetCityForm />
        <Weather 
          city={this.state.city} 
          country={this.state.country} 
          icon={this.state.icon} 
          temp={this.state.temp} 
          minTemp={this.state.minTemp} 
          maxTemp={this.state.maxTemp} 
          condition={this.state.condition}
        />
        
      </div>
    )
  }
}

export default App

        



