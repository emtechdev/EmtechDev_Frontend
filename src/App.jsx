import './App.css'
import Products from './Components/Products'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import PLC from './Components/PLC';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/plc' element={<PLC/>}></Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
