import './App.css'
import Products from './Components/Products'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import PLC from './Components/PLC';
import CP2E_S60DT1_D from './Components/CP2E-S60DT1-D';
import AutomationSystems from './Components/AutomationSystems';
import Admin from './Components/Admin';
import Category from './Components/Category';
import AddProduct from './Components/AddProduct';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/addProduct" element={<AddProduct/>}></Route>
        <Route path="/services" element={<Category/>}></Route>
        <Route path='/plc' element={<PLC/>}></Route>
        <Route path='/CP2E-S60DT1-D' element={<CP2E_S60DT1_D/>}></Route>
        <Route path='/automation-systems' element={<AutomationSystems/>}></Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
