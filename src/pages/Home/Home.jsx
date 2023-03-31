import './index.scss'
import Card from '../../components/Card/Card'
import { MovieService } from '../../api/MovieService'
import {useState, useEffect} from 'react'

function Home({searchValueProp}){
    const [movies, setMovies] = useState([])

    async function getMovies(){
        const {
            data:{results},
        } = await MovieService.getMovies();
        console.log(results);

        setMovies(results);
    }
    async function getMovieSearch(movieString){
        const {
            data:{results},
        } = await MovieService.searchMovies(movieString);
        setMovies(results);
    }

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        if(searchValueProp){
            getMovieSearch(searchValueProp)
        } if(searchValueProp === ""){
            getMovies()
        }
        console.log(searchValueProp)
    }, [searchValueProp]);
    

    return(
        <>
        <section className='Cards'>
            {movies.map((movie) => (<div key={movie.id}><Card movieProp={movie}/></div> 
            ))}{/* Essa propriedade movieProp tem que ser chamada no componente filho */}
        </section>
        <section className='Screens'>
            <div className='title_screens'><h1>Disponível nos seus dispositivos favoritos</h1></div>
            <div className='types_screens'>
                <div className='pc'>
                <lord-icon
                src="https://cdn.lordicon.com/qhgmphtg.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#08a88a"
                delay="4000"
                style={{width:'250px', height:'250px',}}>
                </lord-icon>
                    <h2>Computadores</h2>
                </div>
                <div className='tv'>
                <lord-icon
                src="https://cdn.lordicon.com/iahpzgqp.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#08a88a"
                delay="4000"
                style={{width:'250px', height:'250px',}}>
                </lord-icon>
                    <h2>Smartvs</h2>
                </div>
                <div className='games'>
                <lord-icon
                src="https://cdn.lordicon.com/ktxpktdd.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#08a88a"
                delay="4000"
                style={{width:'250px', height:'250px',}}>
                </lord-icon>
                    <h2>Vídeo games</h2>
                </div>
                <div className='smarts'>
                <lord-icon
                src="https://cdn.lordicon.com/jqeuwnmb.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#08a88a"
                delay="4000"
                style={{width:'250px', height:'250px',}}>
                </lord-icon>
                    <h2>Celulares e tablets</h2>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home