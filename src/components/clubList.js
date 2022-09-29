
import './clubList.css'

export default function ClubList({items}){
    
    return (
        <div className='clubs-gallery'>
            {items.map((item)=>(
                <div key={item.id} className={`club ${item.id}`}>
                    {/* <img className='escudo' alt='escudos de equipos' src={item.logo}></img> */}
                    <a className="club-title" href={`${item.value}/club/${item.id}`}>
                            {item.name}
                    </a>
                </div>
            ))}
            
        
        </div>
    )
}