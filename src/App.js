import './App.css';
import CharacterList from './components/CharacterList';
import Character from './components/Character'
import {useState} from 'react'

function App() {

  let [info, setInfo] = useState([])
  let [data, setData] = useState([])

  let url = 'https://rickandmortyapi.com/api/character'

  function sendRequest(url){
    return fetch(url).then(response => response.json()).then(res =>  {
      //setInfo(res.info)
      setData(data = res.results)})
  }

  function getRequestByPage(page = 1){
    let urlByPage = `${url}/?page=${page}`
    sendRequest(urlByPage)
  }
  getRequestByPage()

  

  return (
    <div className="App">
      <CharacterList data={data}/>
    </div>
  );
}

export default App;

/*
{fetch('https://rickandmortyapi.com/api/character')
       .then((response) => {
       return response.json();
             })
  .then((data) => {
    console.log(data);
  })} */