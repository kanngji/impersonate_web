import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LoginIcon from '@mui/icons-material/Login';


interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = ({ }) => {
  const navigate = useNavigate()

  const handleFileList = () => {
    navigate("/filelist")
  }

  const handleFileUpload = () => {
    navigate("/fileupload")
  }

  const handleContactUs = () => {
    navigate("/inquire")
  }
  const handleMain = () => {
    navigate("/")
  }
  const handleDonate = () => {
    navigate("/donate")
  }
  const handleLogin = () => {
    navigate("/login")
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={handleMain}>Mimic Voice</Button>
          </Typography>
          <Button color="inherit" onClick={handleFileList}><SearchIcon/>파일목록</Button>
          <Button color="inherit" onClick={handleFileUpload}><FileUploadIcon/>파일업로드</Button>
          <Button color="inherit" onClick={handleDonate}><AttachMoneyIcon/>후원하기</Button>
          <Button color="inherit" onClick={handleContactUs}><EmailIcon/>문의하기</Button>
          <Button color="inherit" onClick={handleLogin}><LoginIcon/>로그인</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;