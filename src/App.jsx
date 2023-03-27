import { useState } from 'react'
import Header from './components/Header/Header'

import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)
  // <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>

  return (
    <>
    <div className='Header'>
        <Header/>
    </div>
    <div className='Header'>
        <Outlet/>
    </div>
    <div className='Footer'>
        <Footer/>
    </div>
    </>
  )
}

export default App
