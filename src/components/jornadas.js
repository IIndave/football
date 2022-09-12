
import './jornadas.css'

export default function Jornadas({games}){
    
    return (
        <div className={`games ${games.id}`}>
            <h4>Jornadas</h4>
            {games.map((game)=>(   
                    <a key={game.id} className={`game ${game.id}`} href={`/clubs/${game.idLiga}/jornada/${game.idJornada}`}>
                        <h6 className='local'>{game.idJornada}</h6>
                    </a>
            ))}
        </div>
    )
}