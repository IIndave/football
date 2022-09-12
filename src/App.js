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
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Ligas></Ligas>}></Route>
                        <Route path="/clubs/:idLiga/" element={<Clubs></Clubs>}></Route>
                        <Route path="/clubs/:idLiga/club/:idClub" element={<ClubDetail ></ClubDetail>}></Route>
                        <Route path="/clubs/:idLiga/jornada/:idJornada" element={<Games ></Games>}></Route>
                        <Route path="/clubs/:idLiga/jornada/:idJornada/partido/:idGame" element={<GameDetail ></GameDetail>}></Route>

                        {/* <Route path="/clubs/:idLiga/club/:idClub/player/:idPLayer" element={<PlayerDetail ></PlayerDetail>}></Route> */}
                    </Routes>
                </BrowserRouter>
    </div>
  );
}

export default App;
