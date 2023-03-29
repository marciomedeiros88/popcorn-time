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
        </>
    )
}

export default Home