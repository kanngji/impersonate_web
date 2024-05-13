import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import LoginComponent from '../components/LoginComponent';
import { Box } from '@mui/material';
import SignupComponent from '../components/SignupComponent';



const Signup = () => {
    

    return (
        <div>
            <Container maxWidth='xl'>
                <Header/>
                <Box sx={{marginTop:4}}>
                    <SignupComponent/>
                </Box>
                

                

            </Container>
        </div>
    );
};

export default Signup;