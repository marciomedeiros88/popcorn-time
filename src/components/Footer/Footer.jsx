import './index.scss'
import github from '../../assets/icon_github.svg'
import linkedin from '../../assets/icon_linkedin.svg'
import behance from '../../assets/icon_behance.svg'
import {Link} from 'react-router-dom'


function Footer(){
    return(
        <>  
        <footer>
        <div className='redes'>
            
            <lord-icon
                src="https://cdn.lordicon.com/zjscbpdr.json"
                trigger="loop"
                delay="1000"
                style={{width:'350'}}>
            </lord-icon>
            </div>
            <div class="text">
                <p>Desenvolvido por Márcio Medeiros</p>
            </div>
            <div className='redes'>
            <Link to={'https://www.linkedin.com/in/marcio-s-medeiros/'} target="_blank"><img src={linkedin} alt="Linkedin Márcio Medeiros"/></Link>
            <Link to={'https://github.com/marciomedeiros88/'} target="_blank"><img src={github} alt="Github Márcio Medeiros"/></Link>
            <Link to={'https://www.behance.net/marciomedeiros/'} target="_blank"><img src={behance} alt="Behance Márcio Medeiros"/></Link>
            </div>
            
        </footer>
        </>
    )
}

export default Footer