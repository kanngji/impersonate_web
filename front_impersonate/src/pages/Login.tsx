import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import LoginComponent from '../components/LoginComponent';
import { Box } from '@mui/material';

const Login:React.FC = () => {
    
    return (
        <div>
            
            <Container maxWidth='xl'>
                <Header/>
                <Box sx={{marginTop:4}}>
                    <LoginComponent/>
                </Box>
                

                

            </Container>
        </div>
    );
};

export default Login;