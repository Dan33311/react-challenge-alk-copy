import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import List from './components/List';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/list' element={<List />} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
