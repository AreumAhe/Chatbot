
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/not/Home';
import MentalHealth from './components/not/MentalHealth';
import ProductivityTracker from './components/not/ProductivityTracker';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/mental-health' element={< MentalHealth />}/>
        <Route path='/productivity' element={< ProductivityTracker/>}/> 
      </Routes>

    </Router>
  );
}

export default App;
