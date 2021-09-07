import React from 'react'
import '../App.css'; 

const Character = ({src, name, species, status, gender})=> {

   return(
        <div className="character">
            <div className="character__content">
                <img className="char__img" src={src} alt={`${name}'s photo`}/>
                <div className='char__info'>
                    <div className="char__name">{name}</div>
                    <div className="char__species otherinfo">Species: <span className="orangetext">{species}</span></div>
                    <div className="char__status otherinfo">Status: <span className="orangetext">{status}</span></div>
                    <div className="char__gender otherinfo">Gender: <span className="orangetext">{gender}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Character