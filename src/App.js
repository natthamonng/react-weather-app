import React from 'react'
import Weather from './components/Weather'
import GetCityForm from './components/GetCityForm'
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
      condition: "",
      error: false
    }
  }

  getWeatherPromise = async (e) => {
    e.preventDefault()

    let city = e.target.elements.city.value

    if (city) {
      const apiCall = await fetch(`https://www.prevision-meteo.ch/services/json/${city}`)
      const response = await apiCall.json()
      console.log(response)

      this.setState({
        city: `${response.city_info.name}`,
        country: response.city_info.country,
        icon: response.current_condition.icon_big,
        temp: response.current_condition.tmp,
        minTemp: response.fcst_day_0.tmin,
        maxTemp: response.fcst_day_0.tmax,
        condition: response.current_condition.condition
      })
    } else {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div className="App">
        <GetCityForm loadWeather={this.getWeatherPromise} error={this.state.error} />
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



