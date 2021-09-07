import React from 'react'
import '../App.css'; 

const Location = ({name, type, dimension})=> {

   return(
        <div className="location">
            <div className="location__content">
                <div className="location__item first__location__item">Name: <span className="orangetext">{name}</span></div>
                <div className="location__item">Type: <span className="orangetext">{type}</span></div>
                <div className="">Dimension: <span className="orangetext">{dimension}</span></div>
            </div>
        </div>
    )
}

export default Location