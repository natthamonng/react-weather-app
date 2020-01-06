import React from 'react'

export default function Weather(props) {
    return (
        <div className="container">
            <div className="card d-flex align-items-center" style={{borderStyle: 'none'}}>
                <h1>{props.city}</h1>
                <div className="py-4">
                    <img src={props.icon} alt={props.condition} />
                </div>
                {props.temp ? <h1 className="py-2">{props.temp}&deg;C</h1> : null }

                {/** Show min-max temperature */}
                {minMaxTemp(props.minTemp, props.maxTemp)}

                <h4 className="py-3">{props.condition}</h4>                
            </div>
        </div>
    )
}

const minMaxTemp = (minTemp, maxTemp) => {
    if (minTemp && maxTemp) {
        return (
            <h3>
                <span className="px-4">{minTemp}&deg;C</span>
                <span className="px-4">{maxTemp}&deg;C</span>
            </h3>
        )
    }
    
}