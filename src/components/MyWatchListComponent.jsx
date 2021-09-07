import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

const MyWatchListPage = ({check, episode, name, air_date, id}) => {

    // let [episode, setEpisode] = useState('')
    // let [name, setName] = useState('')
    // let [air_date, setAir_date] = useState('')

    // function getEpisodeById(id){
    //     const response = axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
    //     response.then(res =>  {
    //       setEpisode(episode = res.data.episode)
    //       setName(name = res.data.name)
    //       setAir_date(air_date = res.data.air_date)
    //     })
    // }

    // useEffect(() => {
    //     getEpisodeById(id)
    // },[])

    return(
        <div>
            <input type="checkbox" checked={check}/>
            <div className="">
                <div className="">{episode}</div>
                <div className="">{name}</div>
                <div className="">{air_date}</div>
            </div>
        </div>
    )
}

export default MyWatchListPage