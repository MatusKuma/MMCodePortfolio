import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects.js';
import Contacts from './pages/Contacts.js';
import HomePage from './pages/HomePage.js';
function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/*" element={<Projects />} />
        
      </Routes>
    </BrowserRouter>
      
    </>
    //vytvorit HP
    //krajsi navbar
    //poriesit UI
    //update routeru


  
  );
}

export default App;