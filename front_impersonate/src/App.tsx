import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Inquire from './pages/Inquire';
import Upload from './pages/Upload';

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/inquire" element={<Inquire/>}/>
          <Route path='/fileupload' element={<Upload/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;