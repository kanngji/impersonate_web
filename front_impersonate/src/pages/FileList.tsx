import React from 'react';
import Header from '../components/Header';
import FileCard from '../components/FileCard';
import Container from '@mui/material/Container';
const FileList = () => {
    return (
        <div>
            <Header/>
            <Container sx={{ marginTop: 4 }} maxWidth="lg">
            <FileCard 
                imageSrc="img/1.png"
                name="최민식"
                role="범죄와의전쟁 (최익현)"
                audioSrc="sound/minsic.wav"
            />
            <FileCard 
                imageSrc="img/1.png"
                name="최민식"
                role="범죄와의전쟁 (최익현)"
                audioSrc="sound/minsic.wav"
            />
            </Container>
            
        </div>
    );
};

export default FileList;