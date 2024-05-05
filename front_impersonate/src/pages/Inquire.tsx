import React, {useRef} from 'react';
import Header from '../components/Header';
import { ContactUs } from '../components/ContactUs';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Inquire: React.FC = () => {
  
  return (
    <div>
      <Container maxWidth="xl">
      <Header/>
      {/* 나머지 컨텐츠 */}
      
      <Box sx={{ flexGrow: 1 }}>
        <ContactUs />
      </Box>
      
      
      
      {/* 스와이퍼 컨포넌트  */}
      </Container>
    </div>
  );
};

export default Inquire;