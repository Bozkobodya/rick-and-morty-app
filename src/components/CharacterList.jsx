import React from 'react'
import Character from './Character'

const CharacterList = ({data}) => {
    return(
        <div>
            {data.map(res => {
               return <Character key={res.id} src={res.image} name={res.name} species={res.species} status={res.status} gender={res.gender}/>
            })}
        </div>
    )
}

export default CharacterList