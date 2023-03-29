import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home'
import MovieDetail from './pages/Moviedetail/Moviedetail'

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'',
        element: <Home/>
      },
      {
        path:'/movie/:id',
        element: <MovieDetail/>
      },
    ]
  },
]); */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
