
import './jornadas.css'

export default function Jornadas({games}){
    
    return (
        <div className="jornadas">
            <h4>Jornadas</h4>
            <div className='tabla-jornadas'>
                {games.map((game)=>(   
                    <a key={game.idJornada} className={`game ${game.idJornada}`} href={`/football/clubs/${game.idLiga}/jornada/${game.idJornada}`}>
                        <h6 className='numero'>{game.idJornada}</h6>
                    </a>
            ))}
            </div>
        </div>
    )
}