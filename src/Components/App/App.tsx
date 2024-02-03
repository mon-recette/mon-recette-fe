
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';

function App() {
  return (
    <div className="App">
     <h1>Mon-Recette</h1>
     <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        {/* <Route path='/recipes/:category' element={<HomePage/>}></Route> */}
        {/* <Route path='/recipes/*' element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
