import React from 'react';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';

const Main: React.FC = () => {
  const navigate = useNavigate()
  

  return (
    <div>
      <Container maxWidth="xl">
      <Header 
        
      />
      {/* 나머지 컨텐츠 */}
      
      <Box sx={{ flexGrow: 1 }}>
        <img src={'/img/main1.png'} alt="메인 배경화면" style={{ width: '100%' }} />
      </Box>
      
      
      <Footer/>
      {/* 스와이퍼 컨포넌트  */}
      </Container>
    </div>
  );
};

export default Main;