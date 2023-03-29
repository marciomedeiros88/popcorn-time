import './index.scss'
import capa from '../../assets/gatodebotas.jpeg'
import {Link} from 'react-router-dom'

function Card({movieProp}){ /* Aqui a função recebe a propriedade enviada pela página mãe, no caso a Home */
    return(
        <>
        
        <section className='sectioncard'>
            <div className='card'>
                <div><img src={`https://image.tmdb.org/t/p/w500${movieProp.poster_path}`} alt={movieProp.title} /></div>
                <div className='descricao'>
                <div><h1>{movieProp.original_title}</h1></div>
                <div><h2>{movieProp.vote_average}</h2></div>
                <div><Link to={`/movie/${movieProp.id}`}><button>Ver detalhes</button></Link></div> {/* o to=  envia a url para a página mãe, o id é dinâmico */}
                </div>
            </div>
        </section>
        </>
    )
}

export default Card