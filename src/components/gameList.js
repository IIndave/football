
// import { useState} from 'react';
import './gameList.css';


export default function GameList({items}){

    return (  
        <div className='jornada'>
            <div className='partidos'>
                {items?.map((item)=>(
                    <div>
                        <div className="partido">
                            <a key={item.id} className="club-title" href={`${item.idJornada}/partido/${item.idGame}`}>
                                    {item.local} {item.resultado} {item.visitante}
                            </a>
                        </div>
                        <a href={`${item.idJornada}/partido/${item.idGame}`} className="club-title"></a>
                    </div>
                )) }
            </div>
        </div>
    )
}
