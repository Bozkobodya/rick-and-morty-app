import '../App.css';
import CharacterList from '../components/CharacterList';
import {useEffect, useState} from 'react'
import axios from 'axios'

const CharacterPage= () => {
    

  let [pages, setPages] = useState([])
  let [data, setData] = useState([])
  let [filBySta, setFilBySta] = useState('')
  let [filBySpe, setFilBySpe] = useState('')
  let [filByGen, setFilByGen] = useState('')
  let [pagesArray, setPagesArray] = useState([])

  let url = 'https://rickandmortyapi.com/api/character'

  function sendRequest(url){    
      const response = axios.get(url)
      response.then(res =>  {
        setPages(pages = res.data.info.pages)
        setData(data = res.data.results)
        setPagesArray(pagesArray = createPagesArray(res.data.info.pages))})
      
  }

  function getButtonRequestByPage(page = 1){
    let urlByPage = 
    urlByPage = `${urlByPage}/?page=${page}`
    sendRequest(urlByPage)
  }

  function filtredRequest2(filBySta, filBySpe, filByGen, page = 1) {
    let pageUrl = url
    const response = axios.get(pageUrl, {
      params:{
        status: filBySta,
        species: filBySpe,
        gender: filByGen,
        page: page
      }
    })
      response.then(res =>  {
        setPages(pages = res.data.info.pages)
        setData(data = res.data.results)
        setPagesArray(pagesArray = createPagesArray(res.data.info.pages))})
  }

  function filtredRequest() {
    let filrUrl = url
    if (filBySta != '' || filBySpe != '' || filByGen != ''){
      filrUrl = `${url}/?`
      if(filBySta != ''){
        filrUrl = `${filrUrl}status=${filBySta}`
        if(filBySpe != ''){
          filrUrl = `${filrUrl}&species=${filBySpe}`
          if(filByGen != ''){
            filrUrl = `${filrUrl}&gender=${filByGen}`
            return sendRequest(filrUrl)
          }
        }
      } else if(filBySpe != ''){
        filrUrl = `${url}/?`
        filrUrl = `${filrUrl}species=${filBySpe}`
          if(filByGen != ''){
            filrUrl = `${filrUrl}&gender=${filByGen}`
            return sendRequest(filrUrl)
          }
      } else if(filByGen != ''){
        filrUrl = `${url}/?`
        filrUrl = `${filrUrl}gender=${filByGen}`
        return sendRequest(filrUrl)
        }
    }
    filrUrl = url
    sendRequest(filrUrl)
  }

  function createPagesArray(pages) {
    let result = []
    for(let i = 0; i < pages; i++){
      result.push(i + 1)
    }
    return result
  }

  useEffect(() => {
    filtredRequest()
  },[])

  
 
      
  return (
    <div className="App">
      <div className="filter">
        <select className="filter__el first__select" onChange={e =>setFilBySta(filBySta = e.target.value)}>
          <option value="">Filter by status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select className="filter__el" onChange={e => setFilBySpe(filBySpe = e.target.value)}>
          <option value="">Filter by species</option>
          <option value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
        <select className="filter__el" onChange={e => setFilByGen(filByGen = e.target.value)}>
          <option value="">Filter by gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button className="filter__el filter__button" onClick={() => {filtredRequest2(filBySta, filBySpe, filByGen)}}>Filter</button>
      </div>
      
      <div className="pages__wrapper">
         {pagesArray.map(p => <button onClick={() => {filtredRequest2(filBySta, filBySpe, filByGen, p)}} className="page__button" key={p}>{p}</button>)}
      </div>
      <CharacterList data={data}/>
    </div>
  );
  
}

export default CharacterPage

