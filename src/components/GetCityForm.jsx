import React from 'react'
import './GetCityForm.css'

export default function GetCityForm(props) {
    return (
        <div className="container mb-4">
<div>{props.error ?  error() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row align-items-center">
                    <div className="col-6 my-1 offset-md-3">
                        <input 
                            type="text" 
                            className="form-control"
                            name="city" 
                            autoComplete="off" 
                            placeholder="saisissez une ville" 
                        />
                    </div>
                    <div className="col-3 my-1 mt-md-0 text-md-left">
                        <button className="btn btn-info">Valider</button>
                    </div>
                </div> 
            </form>   
        </div>
    )

    function error() {
        return (
            <div className="alert alert-warning alert-dismissible fade show mx-5" role="alert">
                <strong>Holy guacamole!</strong> Veuillez saisir votre ville.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={closeAlert}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
    function closeAlert() {
        //this.error.dismiss()
        console.log('good')
    }
}

