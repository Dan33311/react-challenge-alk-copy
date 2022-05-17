import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/Details';


function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/list' element={<List />} ></Route>
        <Route path='/details' element={<Details />} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
