import Header from '../components/header';
import GameList from '../components/gameList'

import './games.css'
import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Games(){

    //Parametros
    const {idLiga,idJornada,} = useParams();
    
    const [loading, setLoading] = useState(true);
    const [games, setGame] = useState([]);

  

    const getClubData = async()=>{
        await axios.get("../../../../../db.json")
        .then(res => res.data)
        .then(data =>{
            setGame(data.Ligas[idLiga-1].jornadas[idJornada-1].partidos);
            console.log(data.Ligas[idLiga-1].jornadas[idJornada-1].partidos)
            setLoading(false);
        }
        )
        }
        let navigate = useNavigate();

        function handleChange() {
            var x = document.getElementById("mySelect").value;
            navigate(`/clubs/1/jornada/${x}`);
        }
      
      useEffect(()=>{
      getClubData();
      },[idJornada]);       
        
      return (
          <div>
            <Header>
            </Header>
            { loading ? (
                <span className='loading'>Cargando...</span>
            ) : (
            <div>
                <a href={`/clubs/${idLiga}`}>Atras</a>
                <select id="mySelect" onChange={event => handleChange(event.target.value)} class=" form-select form-select-sm" aria-label=".form-select-sm example">
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    {/* <option value="3" >3</option> */}
                </select>
                <GameList items = { games.map((game) => (
                {
                    idLiga:idLiga,
                    idJornada:idJornada,
                    asistencia: game.asistencia,
                    goleador_local: game.goleador_local,
                    goleador_visitante: game.goleador_visitante,
                    idGame:game.id,
                    local: game.local,
                    resultado: game.resultado,
                    visitante:game.visitante
                }
                ))} />
            </div>
            )}
      </div>
      )
}