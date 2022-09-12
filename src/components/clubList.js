
import './clubList.css'

export default function ClubList({items}){
    
    return (
        <div className='clubs-gallery'>
            {items.map((item)=>(
                <div className="club">
                    <img className='escudo' src={item.logo}></img>
                    <a key={item.id} className="club-title" href={`${item.value}/club/${item.id}`}>
                            {item.name}
                    </a>
                </div>
            ))}
            
        
        </div>
    )
}