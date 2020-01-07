import React from 'react'

export default function Weather(props) {
    console.log(props.weatherData)
    if(props.weatherData == null){
        return (<p>Chargement...</p>)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 card d-flex align-items-center my-5" style={{borderStyle: 'none'}}>

                    <h2>{props.weatherData.city_info.name}, {props.weatherData.city_info.country}</h2>

                    <p>{props.weatherData.fcst_day_0.day_long} {props.weatherData.fcst_day_0.date}</p>

                    <div className="py-4">
                        <img src={props.weatherData.current_condition.icon_big} alt={props.weatherData.current_condition.condition} />
                    </div>

                    <h1 className="py-2">{props.weatherData.current_condition.tmp}&deg;C</h1>

                    <h3>
                        <span className="px-4">{props.weatherData.fcst_day_0.tmin}&deg;C</span>
                        <span className="px-4">{props.weatherData.fcst_day_0.tmax}&deg;C</span>
                    </h3>

                    <h4 className="py-3">{props.weatherData.current_condition.condition}</h4> 
                </div>
            </div>
            <div className="row">
                {getForecastList(props)}
            </div>
        </div>
    )
}

const getForecastList = (props) => {
    const dayNumbers = [1,2,3,4]

    return dayNumbers.map((number) => {
        const dayData = getDayData(props, number)
        return (
            <div key={number.toString()} className="col-3 card d-flex align-items-center mt-3" style={{borderStyle: 'none'}}>
                <p className="font-weight-bold py-1">{dayData.day_short} {dayData.date}</p>
                <div className="py-1">
                    <img src={dayData.icon} alt={dayData.condition} />
                </div>  
                <h5>
                    <span className="px-2">{dayData.tmin}&deg;C</span>
                    <span className="px-2">{dayData.tmax}&deg;C</span>
                </h5>
                <p className="py-1">{dayData.condition}</p>
            </div>
        );
    })
}

const getDayData = (props, dayNumber) => {
    return props.weatherData['fcst_day_' + dayNumber];
}