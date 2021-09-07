import React, {useState} from 'react'
import Character from './Character'
import Modal from './Modal'

const CharacterList = ({data}) => {

    const [modalActive, setModalActive] = useState(false)
    const [modalImg, setModalImg] = useState()
    const [modalName, setModalName] = useState()
    const [modalStatus, setModalStatus] = useState()
    const [modalSpecies, setModalSpecies] = useState()
    const [modalType, setModalType] = useState()
    const [modalGender, setModalGender] = useState()
    const [modalOrigin, setModalOrigin] = useState()
    const [modalLocation, setModalLocation] = useState()
     const onClickPost = (img, name, status, species, type, gender, origin, location) => {
        setModalActive(true)
        setModalImg(img)
        setModalName(name)
        setModalStatus(status)
        setModalSpecies(species)
        setModalType(type)
        setModalGender(gender)
        setModalOrigin(origin)
        setModalLocation(location)
    }

  

    return(
        <div>
            
            
            {data.map(res => {
               return <div onClick={() => onClickPost(res.image, res.name, res.status, res.species, res.type, res.gender, res.origin.name, res.location.name)}  key={res.id} >
                   <Character src={res.image} name={res.name} species={res.species} status={res.status} gender={res.gender}/></div>
            })}
            
            <Modal active={modalActive} setActive={setModalActive} img={modalImg} name={modalName} status={modalStatus} species={modalSpecies} type={modalType} gender={modalGender} origin={modalOrigin} location={modalLocation}/>
        </div>
    )

}

export default CharacterList