import React from 'react'
import Episode from './Episode'

const EpisodeList = ({data}) => {
    return(
        <div>
             {data.map(res => {
               return <div  key={res.id} >
                   <Episode episode={res.episode} name={res.name} air_date={res.air_date}/></div>
            })}
        </div>
    )
}

export default EpisodeList