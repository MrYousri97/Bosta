import React  from 'react'
import {Routes,useLocation} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  
  const location = useLocation();
  return (
    <>      
        <Routes location={location} key={location.pathname}>
        </Routes>
    </>
  )
}

export default App
