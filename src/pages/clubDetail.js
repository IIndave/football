import Header from '../components/header';

import './clubDetail.css'
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


export default function ClubDetail(){

    //Parametros
    const {idLiga,idClub} = useParams();
    
    const [loading, setLoading] = useState(true);
    const [player, setPlayer] = useState([]);
    const [datos,setDatos] = useState({});

    function calcular_edad(fecha){
      
      let hoy=new Date()
      
      let array_fecha = fecha.split("/")
      
      if (array_fecha.length!==3)
         return false
  
      let ano = parseInt(array_fecha[2]);
      if (isNaN(ano))
         return false
  
      let mes = parseInt(array_fecha[0]);
      if (isNaN(mes))
         return false
  
      let dia = parseInt(array_fecha[1]);
      if (isNaN(dia))
         return false
  
      let edad = hoy.getFullYear() - ano -1; //-1 porque no se ya ha cumplido años ya este año
      
  
      //si los meses dan menor que 0 entonces no ha cumplido. 
      if (hoy.getMonth() + 1 - mes < 0) 
         return edad
      if (hoy.getMonth() + 1 - mes > 0)
         return edad+1
  
      
      //si los dias me dan menos que 0 entonces no ha cumplido años.
      if (hoy.getUTCDate() - dia >= 0)
         return edad + 1
  
      return edad
  }

    const getClubData = async()=>{
        await axios.get("../../../db.json")
        .then(res => res.data)
        .then(data =>{
            setPlayer(data.Ligas[idLiga-1].clubs[idClub-1].jugadores);
            setDatos(data.Ligas[idLiga-1].clubs[idClub-1]);
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
            <div className='clubdata-gallery'>
              <a href={`/clubs/${idLiga}`}>Volver a lista de equipos</a>
              <div className='club-card'>
                <img src={datos.escudo} className="club-escudo"></img>
                <div className='info-club'>
                  <h1 className='club-nombre'>{datos.nombre}</h1>
                  <h5>{datos.ciudad}</h5>
                  <h6 className='estadio'>Estadio: <span className='estadio-nombre'>{datos.estadio}</span> <span className='estadio-capacidad'>{datos.capacidad}</span></h6>
                </div>
              </div>
              <table className="table caption-top">
              <caption className='entrenador'><h6>Entrenador : <span>{datos.entrenador}</span></h6></caption>
              <thead className='table-dark'>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Jugadores</th>
                  <th scope="col">Posición</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Nacionalidad</th>
                </tr>
              </thead>
              <tbody>
              {player.map((play)=>(
                <tr>
                  <td className={play.posicion}>{play.dorsal}</td>
                  <td>{play.nombre} {play.apellido}</td>
                  <td>{play.posicion}</td>
                  <td>{calcular_edad(play.cumpleaños)}</td>
                  <td>{play.nacionalidad}</td>
                </tr>
                ))
              }
              </tbody>
            </table>
            
            </div>
      )}
      </div>
      )
}