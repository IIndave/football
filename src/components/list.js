import './list.css'

export default function List({items}){
    return (
        <section className='section-2'>
            <div className='best-ligas'>
                Las mejores ligas europeas
            </div>
            <div className='ligas-gallery'>
                {items.map((item)=>(
                    <div className="liga">
                        <a href={`clubs/${item.idLiga}`}><img className={`liga-logo liga-logo-${item.idLiga}`} src={item.image}/></a>
                        {/* <a key={item.id} className="liga-title" href={`clubs/${item.idLiga}`}>
                                {item.name} 
                        </a> */}
                    </div>
                ))}
            </div>
        </section>
    )
}