import React from 'react'
import '../App.css'; 

const Modal = ({active, setActive, img, name, status, species, type, gender, origin, location}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <img className="modal__img" src={img}/>
                <div className="modal__element">Name: <span className="orangetext">{name}</span></div>
                <div className="modal__element">Status: <span className="orangetext">{status}</span></div>
                <div className="modal__element">Species: <span className="orangetext">{species}</span></div>
                <div className="modal__element">Type: <span className="orangetext">{type}</span></div>
                <div className="modal__element">Gender: <span className="orangetext">{gender}</span></div>
                <div className="modal__element">Origin: <span className="orangetext">{origin}</span></div>
                <div className="modal__element">Location: <span className="orangetext">{location}</span></div>
            </div>
        </div>
    )
}

export default Modal
