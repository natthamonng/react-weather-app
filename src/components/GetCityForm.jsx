import React, { useState } from 'react'
import './GetCityForm.css'

export default function GetCityForm(props) {
    // Déclare une nouvelle variable d'état, que l'on va appeler « inputCityName »
    const [inputCityName, setCityName] = useState("");

    return (
        <div className="container mb-4">
            <form>
                <div className="row align-items-center">
                    <div className="col-6 my-1 offset-3">
                        <input 
                            type="text" 
                            className="form-control"
                            name="city" 
                            autoComplete="off" 
                            placeholder="saisissez une ville"
                            value={inputCityName}
                            onChange={updateInputCityName} 
                        />
                    </div>
                    <div className="col-3 my-1 mt-md-0 text-md-left">
                        <button className="btn btn-info" onClick={handleSearch}>Valider</button>
                    </div>
                </div> 
            </form>   
        </div>
    )

    function updateInputCityName(ev){
        setCityName(ev.target.value)
    }

    function handleSearch(ev){
        props.handleSearch(inputCityName);
    }
    
}

