import {useState, useEffect} from 'react'
import './index.scss'
import {Link, useParams } from 'react-router-dom'
import MovieService from '../../api/MovieService';

function MovieDetail(){
    const {id} = useParams(); /* constante que recebe o id do filme atraves do useParams // as chaves no {id} vai desestruturar o id*/
    const [movie, setMovie] = useState({});

    async function getMovie(){
        const {data} = await MovieService.getMovieDetails(id)
        setMovie(data)
    }

    useEffect(() => {
        getMovie()
        console.log(movie)
    },[])
    
    return(
        <>
        <section className='sectionmovies'>
            <div className='left'>
                <div className='left_img'><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></div>
            </div>
            <div className='right'>
                <div>
                    <h1 className='title'>{movie.title}</h1>
                    <h2 className='average'>{movie.vote_average}</h2>
                    <p className='overview'>{movie.overview}</p>
                    <p className='popularity'>Popularidade: {movie.revenue}</p>
                </div>
                <div><Link to={"/"}><button>Voltar</button></Link></div>
            </div>
        </section>
        </>
    )
}

export default MovieDetail