import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './screens/ItemListContainer'
// import ItemCounter from './components/ItemCounter';
//import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';


function App() {
  return (
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
        <ItemListContainer/>

        {/* <ItemCounter/> */}
      </main>
    </div>
  );
}

export default App;




        // <Routes>
        //   <Route path="/" element={<Layout />}>
        //     <Route  index element={<LogIn  />} />
        //     <Route path="/reportes" element={<Reportes />} />
        //   </Route>
        // </Routes>