import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import './App.css';
import CharacterPage from './pages/CharacterPage';
import EpisodePage from './pages/EpisodePage';
import LocationsPage from './pages/LocationsPage';
import MyWatchListPage from './pages/MyWatchListPage';

function App() {
  return(
    <BrowserRouter>
      <div className="navbar">
        <Link className="nav__link" to="/character">Characters</Link>
        <Link className="nav__link" to="/episode">Episodes</Link>
        <Link className="nav__link" to="/location">Locations</Link>
        <Link className="nav__link" to="/mywatchlist">My watch list</Link>
      </div>
      <Switch>
        <Route path="/character">
          <CharacterPage/>
        </Route>
        <Route path="/episode">
          <EpisodePage/>
        </Route>
        <Route path="/location">
          <LocationsPage/>
        </Route>
        <Route path="/mywatchlist">
          <MyWatchListPage/>
        </Route>
        <Redirect to="/characterpage"/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
