import logopopcorn from '../../assets/popcorntime.svg'
import './index.scss'

function MovieDetail(){
    return(
        <>
        <header>
            <div><img src={logopopcorn} alt="Logo Popcorn Time" /></div>
            <div className='search'>
            <div><input type="text" placeholder='Digite aqui o video que procura'/></div>
            <div><button>Buscar</button></div>
            </div>
            </header>
        </>
    )
}

export default MovieDetail