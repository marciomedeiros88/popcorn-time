import logopopcorn from '../../assets/popcorntime.svg'
import './index.scss'
import Card from '../../components/Card/Card'
import { MovieService } from '../../api/MovieService'
import {useState, useEffect} from 'react'

function Home(){
    const [movies, setMovies] = useState([])

    async function getMovies(){
        const {
            data:{results},
        } = await MovieService.getMovies();
        console.log(results);

        setMovies(results);
    }

    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        console.log(movies)
    });
    

    return(
        <>

        <section className='Cards'>
            {movies.map((movie) => (<div key={movie.id}><Card movieProp={movie}/></div> 
            ))}{/* Essa propriedade movieProp tem que ser chamada no componente filho */}
        </section>
        <div className='Cards'>
        
        </div>
        </>
    )
}

export default Home