import React from 'react'
import '../App.css';
import LocationList from '../components/LocationList';
import {useEffect, useState} from 'react'
import axios from 'axios'

const LocationsPage = () => {

    let url = 'https://rickandmortyapi.com/api/location'

    let [pages, setPages] = useState([])
    let [data, setData] = useState([])
    let [pagesArray, setPagesArray] = useState([])
    let [filByName, setFilByName] = useState('')
    let [filByType, setFilByType] = useState('')
    let [filByDem, setFilByDem] = useState('')

    function createPagesArray(pages) {
        let result = []
        for(let i = 0; i < pages; i++){
          result.push(i + 1)
        }
        return result
    }

    function sendRequest(url){    
        const response = axios.get(url)
        response.then(res =>  {
          setPages(pages = res.data.info.pages)
          setData(data = res.data.results)
          setPagesArray(pagesArray = createPagesArray(res.data.info.pages))
        })
        
    }

    function filtredRequest2(filByName, filByType, filByDem, page = 1) {
        let pageUrl = url
        const response = axios.get(pageUrl, {
          params:{
            name: filByName,
            type: filByType,
            dimension: filByDem,
            page: page
          }
        })
          response.then(res =>  {
            setPages(pages = res.data.info.pages)
            setData(data = res.data.results)
            setPagesArray(pagesArray = createPagesArray(res.data.info.pages))})
      }

    useEffect(() => {
        sendRequest(url)
    },[])

    return(
        <div>
            <div className="filter">
                <select className="filter__el" onChange={e => setFilByType(filByType = e.target.value)}>
                    <option value="">Filter by type</option>
                    <option value="Planet">Planet</option>
                    <option value="Cluster">Cluster</option>
                    <option value="Space station">Space station</option>
                    <option value="Planet">Planet</option>
                    <option value="Microverse">Microverse</option>
                    <option value="TV">TV</option>
                    <option value="Resort">Resort</option>
                    <option value="Fantasy town">Fantasy town</option>
                    <option value="Dream">Dream</option>
                    <option value="Dimension">Dimension</option>
                    <option value="Menagerie">Menagerie</option>
                    <option value="Game">Game</option>
                    <option value="Customs">Customs</option>
                    <option value="Daycare">Daycare</option>
                    <option value="Dwarf planet (Celestial Dwarf)">Dwarf planet (Celestial Dwarf)</option>
                    <option value="Miniverse">Miniverse</option>
                    <option value="Teenyverse">Teenyverse</option>
                    <option value="Box">Box</option>
                    <option value="Spacecraft">Spacecraft</option>
                    <option value="Artificially generated world">Artificially generated world</option>
                    <option value="Machine">Machine</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Spa">Spa</option>
                    <option value="Quadrant">Quadrant</option>
                    <option value="Quasar">Quasar</option>
                    <option value="Mount">Mount</option>
                    <option value="Liquid">Liquid</option>
                    <option value="Convention">Convention</option>
                    <option value="Woods">Woods</option>
                    <option value="Diegesis">Diegesis</option>
                    <option value="Non-Diegetic Alternative Reality">Non-Diegetic Alternative Reality</option>
                    <option value="Nightmare">Nightmare</option>
                    <option value="Asteroid">Asteroid</option>
                    <option value="Acid Plant">Acid Plant</option>
                    <option value="Reality">Reality</option>
                    <option value="Death Star">Death Star</option>
                    <option value="Base">Base</option>
                </select>
                <select className="filter__el" onChange={e => setFilByDem(filByDem = e.target.value)}>
                    <option value="">Filter by dimension</option>
                    <option value="Dimension C-137">Dimension C-137</option>
                    <option value="unknown">unknown</option>
                    <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
                    <option value="Replacement Dimension">Replacement Dimension</option>
                    <option value="Cronenberg Dimension">Cronenberg Dimension</option>
                    <option value="Fantasy Dimension">Fantasy Dimension</option>
                    <option value="Dimension 5-126">Dimension 5-126</option>
                    <option value="Testicle Monster Dimension">Testicle Monster Dimension</option>
                    <option value="Cromulon Dimension">Cromulon Dimension</option>
                    <option value="Dimension C-500A">Dimension C-500A</option>
                    <option value="Dimension K-83">Dimension K-83</option>
                    <option value="Dimension J19ζ7">Dimension J19ζ7</option>
                    <option value="Eric Stoltz Mask Dimension">Eric Stoltz Mask Dimension</option>
                    <option value="Evil Rick's Target Dimension">Evil Rick's Target Dimension</option>
                    <option value="Giant Telepathic Spiders Dimension">Giant Telepathic Spiders Dimension</option>
                    <option value="Dimension K-22">Dimension K-22</option>
                    <option value="Dimension D-99">Dimension D-99</option>
                    <option value="Dimension D716">Dimension D716</option>
                    <option value="Dimension D716-B">Dimension D716-B</option>
                    <option value="Dimension D716-C">Dimension D716-C</option>
                    <option value="Dimension J-22">Dimension J-22</option>
                    <option value="Dimension C-35">Dimension C-35</option>
                    <option value="Pizza Dimension">Pizza Dimension</option>
                    <option value="Phone Dimension">Phone Dimension</option>
                    <option value="Chair Dimension">Chair Dimension</option>
                    <option value="Fascist Dimension">Fascist Dimension</option>
                    <option value="Fascist Shrimp Dimension">Fascist Shrimp Dimension</option>
                    <option value="Fascist Teddy Bear Dimension">Fascist Teddy Bear Dimension</option>
                    <option value="Wasp Dimension">Wasp Dimension</option>
                    <option value="Tusk Dimension">Tusk Dimension</option>
                    <option value="Magic Dimension">Magic Dimension</option>
                    <option value="Merged Dimension">Merged Dimension</option>
                </select>
                <button className="filter__el filter__button" onClick={() => {filtredRequest2(filByName, filByType, filByDem)}}>Filter</button>
            </div>
            <div className="pages__wrapper">
                    {pagesArray.map(p => <button onClick={() => {filtredRequest2(filByName, filByType, filByDem, p)}} className="page__button" key={p}>{p}</button>)}
            </div>
            <LocationList data={data}/>
        </div>
    )
}

export default LocationsPage