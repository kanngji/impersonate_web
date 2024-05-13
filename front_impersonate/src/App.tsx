import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import FileList from './pages/FileList';
import Inquire from './pages/Inquire';
import Upload from './pages/Upload';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/filelist" element={<FileList/>}/>
          <Route path="/inquire" element={<Inquire/>}/>
          <Route path='/fileupload' element={<Upload/>}/>
          {/* 로그인 하면 로그 아웃 되게 */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
