import logopopcorn from '../../assets/popcorntime.svg'
import './index.scss'
import Card from '../../components/Card/Card'
import { MovieService } from '../../api/MovieService'
import {useState, useEffect} from 'react'

function Home(){
    const [movies, setMovies] = useState([])

    async function getMovies(){
        const data = await MovieService.getMovies();
        console.log(data);
    }

    useEffect(() => {
        getMovies();
    })
    

    return(
        <>
        <div className='Cards'>
        <Card/>
        </div>
        </>
    )
}

export default Home