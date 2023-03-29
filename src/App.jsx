import { useState } from 'react'
import Header from './components/Header/Header'
import './index.scss'
import Footer from './components/Footer/Footer'
import {Outlet, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import MovieDetail from './pages/Moviedetail/Moviedetail'


function App() {
  const [searchValue, setSearchValue] = useState("") /* searchValue inicialmente é uma string vazia */
  // <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>

  return (
    <>
    <div className='Header'>
        <Header onSubmit={(inputValue)=>setSearchValue(inputValue)}/>
        {/* propriedade criada dentro do propos no Header
        o searchValue que está no Home vai ser colocado no inputValue que está no App
        inputValue está sendo colocado no setSearchValue, alterando assim o valor de searchValue*/}
    </div>
    <div className='Outlet'>
        <Routes>
          <Route path="/" element={<Home searchValueProp={searchValue}/>}/>
          <Route path="/movie/:id" element={<MovieDetail/>}/>
        </Routes>
    </div>
    <div className='Footer'>
        <Footer/>
    </div>
    </>
  )
}

export default App
