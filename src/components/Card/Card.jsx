import './index.scss'
import capa from '../../assets/gatodebotas.jpeg'

function Card(){
    return(
        <>
        
        <section>
            <div className='card'>
                <div><img src={capa} alt="" /></div>
                <div className='descricao'>
                <div><h1>Título do filme</h1></div>
                <div><h2>Subtítulo do filme</h2></div>
                </div>
            </div>
            <div className='card'>
                <div><img src={capa} alt="" /></div>
                <div className='descricao'>
                <div><h1>Título do filme</h1></div>
                <div><h2>Subtítulo do filme</h2></div>
                </div>
            </div>
            <div className='card'>
                <div><img src={capa} alt="" /></div>
                <div className='descricao'>
                <div><h1>Título do filme</h1></div>
                <div><h2>Subtítulo do filme</h2></div>
                </div>
            </div>
            <div className='card'>
                <div><img src={capa} alt="" /></div>
                <div className='descricao'>
                <div><h1>Título do filme</h1></div>
                <div><h2>Subtítulo do filme</h2></div>
                </div>
            </div>
            <div className='card'>
                <div><img src={capa} alt="" /></div>
                <div className='descricao'>
                <div><h1>Título do filme</h1></div>
                <div><h2>Subtítulo do filme</h2></div>
                </div>
            </div>
            <div className='card'>
                <div><img src={capa} alt="" /></div>
                <div className='descricao'>
                <div><h1>Título do filme</h1></div>
                <div><h2>Subtítulo do filme</h2></div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Card