import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/cart" exact element={<Cart/>}/>
      <Route path="/notfound" exact element={<NotFound/>}/>
      <Route path="/" exact  element={<Home/>}/>
      {/* <Navigate to='notfound'/> */}
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
