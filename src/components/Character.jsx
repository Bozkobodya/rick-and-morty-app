import React from 'react'

const Character = ({src, name})=> {

   return(
        <div className="character">
            <div className="character__content">
                <img src={src} alt="Character's image" />
                <div className="Name">{name}</div>
            </div>
        </div>
    )
}

export default Character