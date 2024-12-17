import Home from './components/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Navbarra  from './components/NavBar'
import Footer from './components/Footer'



function App() {
 

  return (
    <div>
      <Navbarra />
      <Home />
      <Footer />
    </div>
  )
}

export default App