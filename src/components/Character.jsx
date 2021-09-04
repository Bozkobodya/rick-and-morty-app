import React from 'react'
import '../App.css'; 

const Character = ({src, name, species, status, gender})=> {

   return(
        <div className="character">
            <div className="character__content">
                <img className="char__img" src={src} alt={`${name}'s photo`}/>
                <div className='char__info'>
                    <div className="char__name">{name}</div>
                    <div className="char__species">Species:{species}</div>
                    <div className="char__status">Status:{status}</div>
                    <div className="char__gender">Gender:{gender}</div>
                </div>
            </div>
        </div>
    )
}
// //"species": "Humanoid",
// "type": "Rick's Toxic Side",
// "gender": "Male",
export default Character