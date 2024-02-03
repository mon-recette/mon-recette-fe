import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage'
import HomePage from '../HomePage/HomePage';
import SavedRecipesPage from '../SavedRecipePage/SavedRecipePage'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/recipes/:category' element={<SavedRecipesPage/>}></Route>
        {/* <Route path='/recipes/*' element={<NotFound/>}/> */}
        
      </Routes>
    </div>
  );
}

export default App;