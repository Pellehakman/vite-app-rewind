import { Routes, Route } from 'react-router-dom'
import '../src/styles/variables.scss'
import Nav from './components/Nav'
import Home from './views/Home'
import Footer from './components/Footer'
const LOCAL_STORAGE_KEY = 'Match';
import jsonData from './data/data.json'





function App() {

  if (localStorage.length > 0){
    //Items are stored in local storage
}else{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jsonData));
}

  


  return (
    <div className="app">
      <Nav />
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
