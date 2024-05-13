import React from 'react';
import Header from '../components/Header';
import FileCard from '../components/FileCard';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
const FileList = () => {
    return (
        <div>
            
            <Container maxWidth="xl">
            <Header />
            
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <TextField id="outlined-basic" size="medium" variant="outlined" sx={{marginTop:2}} ></TextField>
                <SearchIcon fontSize='large'/>
            </Box>
            
            <Box sx={{marginTop:2}}>   
            <FileCard
                imageSrc="img/1.png"
                name="최민식"
                role="범죄와의전쟁 (최익현)"
                audioSrc="sound/minsic.wav"
            /></Box>
            
            <Box sx={{marginTop:2}}>   
            <FileCard
                imageSrc="img/1.png"
                name="최민식"
                role="범죄와의전쟁 (최익현)"
                audioSrc="sound/minsic.wav"
            /></Box>
            </Container>
            
        </div>
    );
};

export default FileList;