import './App.css'
import './index.css'
import * as React from "react";
import {
  Routes,
  Route,
} from 'react-router-dom'
import Login from './pages/Login'
import Posts from './pages/Posts'
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login/> }/>
      
      <Route path="/login" element={ <Login/> }/>
      <Route path="/posts" element={ <Posts/> }/>
      <Route path="*" element={ <NotFound/> }/>
    </Routes>
  );
}

export default App;
