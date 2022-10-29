import './App.css';
import Header from './Header';
import Home from './Home';
import Salary from './Salary';

import Emi from './Emi';


import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Expenses from './Expenses';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/Salary" element={<Salary />}/>
        <Route path="/Emi" element={<Emi />}/>
        <Route path="/Expenses" element={<Expenses />}/>
        
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
