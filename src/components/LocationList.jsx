import React from 'react'
import Location from './Location'

const LocationList = ({data}) => {
    return(
        <div>
             {data.map(res => {
               return <div  key={res.id} >
                   <Location name={res.name} type={res.type} dimension={res.dimension}/></div>
            })}
        </div>
    )
}

export default LocationList