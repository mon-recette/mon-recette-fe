
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage'
import HomePage from '../HomePage/HomePage';
import SavedRecipesPage from '../SavedRecipePage/SavedRecipePage'
import ErrorPage from '../ErrorPage/ErrorPage'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/saved' element={<SavedRecipesPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;