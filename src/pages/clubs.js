import ClubList from '../components/clubList';
import Jornadas from '../components/jornadas';
import Header from '../components/header';
import './clubs.css'
import { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";

import axios from 'axios';


export default function Clubs(){
   
    const {idLiga} = useParams();

    const [jornada, setJornada] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clubs, setClubs] = useState([]);
    
    

    const getClubs = async()=>{
        await axios.get("../db.json")
        .then(res => res.data)
        .then(data =>{
            console.log(data.Ligas[idLiga-1].clubs)
            setClubs(data.Ligas[idLiga-1].clubs);
            setLoading(false);
            setJornada(data.Ligas[idLiga-1].jornadas);
            console.log(data.Ligas[idLiga-1].jornadas)
        })}
      
      useEffect(()=>{
        getClubs();
      },[idLiga]);

      return (
        <div className="">
            <Header>
            
            </Header>
            { loading ? (
                <span className='loading'>Cargando...</span>
            ) : (
                <div className='clubes'>
                    <a className='volver' href={`/`}>Volver a lista de ligas</a>
                    <ClubList items = { clubs.map((club) => (
                        {
                            value:idLiga,
                            id:club.id,
                            name:club.nombre,
                            short:club.abreviatura,
                            stadium:club.estadio,
                            capacity:club.capacidad,
                            city:club.ciudad,
                            logo:club.escudo,
                            coach:club.entrenador,
                            players:club.jugadores
                        }
                    ))} />
                
                    
                    </div>
            )}
            { !jornada ? (
                <span className='loading'>Cargando...</span>
            ) : (
            <Jornadas games = { jornada.map((game) => (
                {
                    idLiga:idLiga,
                    idJornada:game.id,
                    partidos:game.partidos
                }
            ))} />
            )}
        </div>
    )
}