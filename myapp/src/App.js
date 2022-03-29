import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CustomCartContext} from './context/CustomCartContext';
import {Cart}  from './components/Cart/Cart';

// import ItemCounter from './components/ItemCounter';
//import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';


function App() {
  return (
    <CustomCartContext>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className="App-logoContainer">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <nav style={{display: 'flex', flexDirection: 'row'}}>
              <NavBar/>
            </nav>
          </header>
          <main className="App-header" style ={{marginTop: -800}}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>

          </main>
        </div>
      </BrowserRouter>
    </CustomCartContext>
  );
}

export default App;

    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<ItemListContainer />} />
    //     <Route path="/productos/:category" element={<ItemListContainer />} />
    //     <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
    //   </Routes>
    // </BrowserRouter>