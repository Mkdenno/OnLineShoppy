import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import { Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/cart" exact element={<Cart/>}/>
      <Route path="/" exact  element={<Home/>}/>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
