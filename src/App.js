import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import React from 'react';

import Ligas from './pages/ligas'
import Clubs from './pages/clubs'
import ClubDetail from './pages/clubDetail'
import Games from './pages/games'
import GameDetail from './pages/gameDetail';

function App() {
  return (
    <div className='App'>
                    <Routes>
                        <Route path="/football" element={<Ligas></Ligas>}></Route>
                        <Route path="football/clubs/:idLiga" element={<Clubs></Clubs>}></Route>
                        <Route path="football/clubs/:idLiga/club/:idClub" element={<ClubDetail ></ClubDetail>}></Route>
                        <Route path="football/clubs/:idLiga/jornada/:idJornada" element={<Games ></Games>}></Route>
                        <Route path="football/clubs/:idLiga/jornada/:idJornada/partido/:idGame" element={<GameDetail ></GameDetail>}></Route>
                    </Routes>
   </div>
  );
}

export default App;
