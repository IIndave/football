import './list.css'

export default function List({items}){
    return (
        <div className='ligas-gallery'>
            {items.map((item)=>(
                <div className="liga">
                    <img className='liga-logo' src={item.image}/>
                    <a key={item.id} className="liga-title" href={`clubs/${item.idLiga}`}>
                            {item.name} 
                    </a>
                </div>
            ))}
            
        </div>
    )
}