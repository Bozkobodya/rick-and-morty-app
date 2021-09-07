import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

const MyWatchListPage = ({check, episode, name, air_date, id}) => {


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