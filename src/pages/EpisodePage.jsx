import React from 'react'
import '../App.css';
import EpisodeList from '../components/EpisodeList';
import {useEffect, useState} from 'react'
import axios from 'axios'

const EpisodePage = () => {

    let url = 'https://rickandmortyapi.com/api/episode'

    let [nameSelect, setNameSelect] = useState([])
    let [pages, setPages] = useState([])
    let [data, setData] = useState([])
    let [pagesArray, setPagesArray] = useState([])
    let [filByName, setFilByName] = useState('')

    function sendRequest(url){    
        const response = axios.get(url)
        response.then(res =>  {
          setPages(pages = res.data.info.pages)
          setData(data = res.data.results)
          setPagesArray(pagesArray = createPagesArray(res.data.info.pages))
        })
        
    }

    function getNameById(id){
        let pageUrl = url
        let name
        const response = axios.get(pageUrl, {
          params:{
            id: id
          }
        })
        response.then(res =>  {
            name = res.data.name})
        return name
    }

    function createNameArray(count) {
        let result = []
        for(let i = 0; i < count; i++){
          result.push(getNameById(i + 1))
        }
        return result
    }

    function filtredRequest2(filByName, page = 1) {
        let pageUrl = url
        const response = axios.get(pageUrl, {
          params:{
            name: filByName,
            page: page
          }
        })
          response.then(res =>  {
            setPages(pages = res.data.info.pages)
            setData(data = res.data.results)
            setPagesArray(pagesArray = createPagesArray(res.data.info.pages))})
      }

    function createPagesArray(pages) {
        let result = []
        for(let i = 0; i < pages; i++){
          result.push(i + 1)
        }
        return result
    }

    useEffect(() => {
        sendRequest(url)
    },[])

    return(
        <div>
            <div className="filter">
                <select className="filter__el first__select" onChange={e =>setFilByName(filByName = e.target.value)}>
                    <option value="">Filter by name</option>
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
                <button className="filter__el filter__button" onClick={() => {filtredRequest2(filByName)}}>Filter</button>
            </div>
            <div className="pages__wrapper">
                {pagesArray.map(p => <button onClick={() => {filtredRequest2(filByName, p)}} className="page__button" key={p}>{p}</button>)}
            </div>
            <EpisodeList data={data}/>
        </div>        
    )
}

export default EpisodePage