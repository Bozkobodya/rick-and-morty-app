import React from 'react'
import Character from './Character'

const CharacterList = ({data}) => {
    return(
        <div>
            {data.map(res => {
                <Character src={res.image} name={res.name}/>
            })}
        </div>
    )
}

export default CharacterList