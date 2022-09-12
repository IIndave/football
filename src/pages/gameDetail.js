import Header from '../components/header';

import './gameDetail.css'
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


export default function GameDetail(){

    //Parametros
    const {idLiga,idJornada,idGame} = useParams();
    
    const [loading, setLoading] = useState(true);
    const [datos,setDatos] = useState({});
    const [golLocal,setGolLocal] = useState({});


    const getClubData = async()=>{
        await axios.get("../../../../../db.json")
        .then(res => res.data)
        .then(data =>{
            setDatos(data.Ligas[idLiga-1].jornadas[idJornada-1].partidos[idGame-1]);
            setGolLocal(data.Ligas[idLiga-1].jornadas[idJornada-1].partidos[idGame-1].goleadores);
            console.log(data.Ligas[idLiga-1].jornadas[idJornada-1].partidos[idGame-1].goleadores);
            setLoading(false);
        }
        )
        }

      useEffect(()=>{
      getClubData();
      },[]);       
        
    
      return (
        
          <div>
            <Header>
            </Header>
            { loading ? (
                <span className='loading'>Cargando...</span>
            ) : (
            <div className=''>
            <table className="table caption-top">
            <caption className='entrenador'><h6>Asistencia : <span>{datos.asistencia}</span></h6></caption>
              <thead className='table-dark'>
                <tr>
                  <th scope="col">{datos.local}</th>
                  <th scope="col">{datos.resultado} </th>
                  <th scope="col">{datos.visitante}</th>
                </tr>
              </thead>
              <tbody>
              {golLocal.map((gol)=>(
                <tr>
                    <td className={gol.autogol}>
                    { gol.equipo==="local" ? (
                            <span>{gol.nombre}</span>
                        ) : (
                        <span></span>
                            )}
                    </td>
                    <td className='minuto'>{gol.minuto}</td>
                    <td>
                    { gol.equipo==="local" ? (
                            <span></span>
                        ) : (
                        <span>{gol.nombre}</span>
                            )}
                    </td>
                </tr>))}
                </tbody>
            </table>
            </div>
      )}
      </div>
      )
}