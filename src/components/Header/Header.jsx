import logopopcorn from '../../assets/popcorntime.svg'
import './index.scss'
import {Link} from 'react-router-dom'

function Header(props){

    function handleSubmit(event){ /* essa funcao recebe o evento e repassa para o componente pai */
        event.preventDefault(); /* previne o recarregamento da one page aplication */
        const searchValue = event.target[0].value; /* aqui ele recebe o value do input */
        props.onSubmit(searchValue); /* quando acontecer o submit ele vai puxar o searchvalue */
        event.target.value = "";
    }
    return(
        <>
        <header>
            <div className='logo'><Link to={"/"} alt="Voltar para home"><img src={logopopcorn} alt="Logo Popcorn Time" /></Link></div>
            <div className='search'>
                <form onSubmit={handleSubmit}>
                    <div><input type="text" placeholder='Digite aqui o video que procura'/></div>
                    <div><button>Buscar</button></div>
                </form>
            </div>
            </header>
        </>
    )
}

export default Header