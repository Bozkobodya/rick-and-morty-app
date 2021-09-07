import React from 'react'
import '../App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import MyWatchListComponent from '../components/MyWatchListComponent'

const MyWatchListPage = () => {

    let[inputName, setInputName] = useState('')
    let[storageItems, setStorageItems] = useState([])
    let[localId, setSetLocalId] = useState('')

    let [episode, setEpisode] = useState('')
    let [name, setName] = useState('')
    let [air_date, setAir_date] = useState('')

    function getEpisodeById(id){
        const response = axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
        response.then(res =>  {
          setEpisode(episode = res.data.episode)
          setName(name = res.data.name)
          setAir_date(air_date = res.data.air_date)
        })
    }

    function setIntoLocalStorage(inputName){
        const axi = axios.get('https://rickandmortyapi.com/api/episode', {
            params:{
                name: inputName
            }
        })
        axi.then(e => {
           setSetLocalId(localId = e.data.results[0].id)
           let obj = {
            check: 'unchecked',
            id: localId
        }
        localStorage.setItem(localId, JSON.stringify(obj))
        })
       
    }

    useEffect(() => {
        let arr = []
        for(let i = 1; i <= 41; i++){
            let remaf = localStorage.getItem(i)
            if(remaf != null){
                arr.push(JSON.parse(remaf))
            }
        }
        setStorageItems(storageItems = arr)
    }, [])

    return(
        <div className="mywatchlist">
            <select className="filter__el first__select">
                    <option value="">List of episodes</option>
                   <option value="Pilot">Pilot</option>
                   <option value="Lawnmower Dog">Lawnmower Dog</option>
                   <option value="Anatomy Park">Anatomy Park</option>
                   <option value="M. Night Shaym-Aliens!">M. Night Shaym-Aliens!</option>
                   <option value="Meeseeks and Destroy">Meeseeks and Destroy</option>
                   <option value="Rick Potion #9">Rick Potion #9</option>
                   <option value="Raising Gazorpazorp">Raising Gazorpazorp</option>
                   <option value="Rixty Minutes">Rixty Minutes</option>
                   <option value="Something Ricked This Way Comes">Something Ricked This Way Comes</option>
                   <option value="Close Rick-counters of the Rick Kind">Close Rick-counters of the Rick Kind</option>
                   <option value="Ricksy Business">Ricksy Business</option>
                   <option value="A Rickle in Time">A Rickle in Time</option>
                   <option value="Mortynight Run">Mortynight Run</option>
                   <option value="Auto Erotic Assimilation">Auto Erotic Assimilation</option>
                   <option value="Total Rickall">Total Rickall</option>
                   <option value="Get Schwifty">Get Schwifty</option>
                   <option value="The Ricks Must Be Crazy">The Ricks Must Be Crazy</option>
                   <option value="Big Trouble in Little Sanchez">Big Trouble in Little Sanchez</option>
                   <option value="Interdimensional Cable 2: Tempting Fate">Interdimensional Cable 2: Tempting Fate</option>
                   <option value="Look Who's Purging Now">Look Who's Purging Now</option>
                   <option value="The Wedding Squanchers">The Wedding Squanchers</option>
                   <option value="The Rickshank Rickdemption">The Rickshank Rickdemption</option>
                   <option value="Rickmancing the Stone">Rickmancing the Stone</option>
                   <option value="Pickle Rick">Pickle Rick</option>
                   <option value="Vindicators 3: The Return of Worldender">Vindicators 3: The Return of Worldender</option>
                   <option value="The Whirly Dirly Conspiracy">The Whirly Dirly Conspiracy</option>
                   <option value="Rest and Ricklaxation">Rest and Ricklaxation</option>
                   <option value="The Ricklantis Mixup">The Ricklantis Mixup</option>
                   <option value="Morty's Mind Blowers">Morty's Mind Blowers</option>
                   <option value="The ABC's of Beth">The ABC's of Beth</option>
                   <option value="The Rickchurian Mortydate">The Rickchurian Mortydate</option>
                   <option value="Edge of Tomorty: Rick, Die, Rickpeat">Edge of Tomorty: Rick, Die, Rickpeat</option>
                   <option value="The Old Man and the Seat">The Old Man and the Seat</option>
                   <option value="One Crew Over the Crewcoo's Morty">One Crew Over the Crewcoo's Morty</option>
                   <option value="Claw and Hoarder: Special Ricktim's Morty">Claw and Hoarder: Special Ricktim's Morty</option>
                   <option value="Rattlestar Ricklactica">Rattlestar Ricklactica</option>
                   <option value="Never Ricking Morty">Never Ricking Morty</option>
                   <option value="Promortyus">Promortyus</option>
                   <option value="The Vat of Acid Episode">The Vat of Acid Episode</option>
                   <option value="Childrick of Mort">Childrick of Mort</option>
                   <option value="Star Mort: Rickturn of the Jerri">Star Mort: Rickturn of the Jerri</option>
                </select>
            <div className="mywatch__form"> 
                <input className="mywatch__input" placeholder="Write in an episode's name" onChange={(e) => setInputName(e.target.value)}/>
                <button className="mywatch__button" onClick={() => setIntoLocalStorage(inputName)}>Add</button>
                {storageItems.map(res => {
                    <MyWatchListComponent check={res.check} id={res.id}/>
                })}
                
            </div>
        </div>
    )
}

export default MyWatchListPage