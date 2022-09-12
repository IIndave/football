

import { useParams } from "react-router-dom";

import './gameList.css'
export default function GameList({items}){
    const {idLiga} = useParams();

    const obtenerJornada = (jornadaSeleccionada)=>{
        var jornada = 
      }

    return (
        <div>
            <a href={`/clubs/${idLiga}`}>Atras</a>
            <select class=" form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected>Seleccionar jornada:</option>
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
            </select>
            <div className='partidos'>
                {items.map((item)=>(
                    <div className="partido">
                        <a key={item.id} className="club-title" href={`${item.idJornada}/partido/${item.idGame}`}>
                                {item.local} {item.resultado} {item.visitante}
                        </a>
                    </div>
                ))}       
            </div>
        </div>
        
    )
}
