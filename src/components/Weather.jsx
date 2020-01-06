import React from 'react'

export default function Weather(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 card d-flex align-items-center" style={{borderStyle: 'none'}}>
                    <h1>{props.city}, {props.country}</h1>
                    <div className="py-4">
                        <img src={props.icon} alt={props.condition} />
                    </div>
                    <h1 className="py-2">{props.temp}&deg;C</h1>

                    <h3>
                        <span className="px-4">{props.minTemp}&deg;C</span>
                        <span className="px-4">{props.maxTemp}&deg;C</span>
                    </h3>

                    <h4 className="py-3">{props.condition}</h4>                
                </div>
            </div>
            <div className="row">
                {getForecastList()}
            </div>
            
        </div>
    )
}


const getForecastList = () => {
    const dayNumbers = [1,2,3,4]
    for ( let dayNumber of dayNumbers) {
        return (
            <>
            <div className="col-3 card d-flex align-items-center mt-3" style={{borderStyle: 'none'}}>
                <p className="py-1">date</p>
                <div className="py-1">
                    <img src="https://www.prevision-meteo.ch/style/images/icon/eclaircies.png" alt="" />
                </div>  
                <h5>
                    <span className="px-2">0&deg;C</span>
                    <span className="px-2">1&deg;C</span>
                </h5>
                <p className="py-1">condition</p>               
            </div>

            <div className="col-3 card d-flex align-items-center mt-3" style={{borderStyle: 'none'}}>
                <p className="py-1">date</p>
                <div className="py-1">
                    <img src="https://www.prevision-meteo.ch/style/images/icon/eclaircies.png" alt="" />
                </div>  
                <h5>
                    <span className="px-2">1&deg;C</span>
                    <span className="px-2">2&deg;C</span>
                </h5>
                <p className="py-1">condition</p>               
            </div>

            <div className="col-3 card d-flex align-items-center mt-3" style={{borderStyle: 'none'}}>
                <p className="py-1">date</p>
                <div className="py-1">
                    <img src="https://www.prevision-meteo.ch/style/images/icon/eclaircies.png" alt="" />
                </div>  
                <h5>
                    <span className="px-2">2&deg;C</span>
                    <span className="px-2">3&deg;C</span>
                </h5>
                <p className="py-1">condition</p>               
            </div>

            <div className="col-3 card d-flex align-items-center mt-3" style={{borderStyle: 'none'}}>
                <p className="py-1">date</p>
                <div className="py-1">
                    <img src="https://www.prevision-meteo.ch/style/images/icon/eclaircies.png" alt="" />
                </div>  
                <h5>
                    <span className="px-2">3&deg;C</span>
                    <span className="px-2">4&deg;C</span>
                </h5>
                <p className="py-1">condition</p>               
            </div>
        </>
        )
    }
}