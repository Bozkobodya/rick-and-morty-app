import React from 'react'
import '../App.css'; 

const Episode = ({episode, name, air_date})=> {

   return(
        <div className="episode">
            <div className="episode__content">
                <div className="episode_num episode__item">{episode}</div>
                <div className="name episode__item orangetext">{name}</div>
                <div className="air_date episode__air">{air_date}</div>
            </div>
        </div>
    )
}

export default Episode