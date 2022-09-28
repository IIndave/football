import "./ligas.css";
import List from '../components/list';
import Header from '../components/header';

import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Ligas(){
   
    const [loading, setLoading] = useState(true);
    const [ligas, setLigas] = useState([]);
    

    const getLigas = async()=>{
        await axios.get("db.json")//
        .then(res => res.data)
        .then(data =>{
            setLigas(data.Ligas);
            setLoading(false);
          })
        }

      useEffect(()=>{
        getLigas();
      },[]);

      return (
        <div className="main">
            <Header>
            
            </Header>
            { loading ? (
                <span className='loading'>Cargando...</span>
            ) : (
                <div id="sec" className="ligas">
                    {/* <img className='ball' src='../assets/ball.jpg'></img> */}
                    <List items={ ligas.map((liga) => (
                        {
                            idLiga:liga.id,
                            name:liga.nombre,
                            country:liga.pais,
                            image:liga.logo,
                        }
                    ))} />
                </div>
            )}
        </div>
    )
}