import React, {useRef,useEffect,useState} from 'react';
import Header from '../components/Header';
import { ContactUs } from '../components/ContactUs';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Upload: React.FC = () => {
  const [message,setMessage] = useState<string>("");

  useEffect(() => {
    // useEffect 내부에서 비동기 코드 실행
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/hello");
        const json = await response.json();
        setMessage(json.message);
      } catch (error) {
        console.error("Error 발생", error);
      }
    };

    fetchData(); // fetchData 함수 호출
  }, []);
  return (
    <div>
      <Container maxWidth="xl">
      <Header/>
      {/* 나머지 컨텐츠 */}
      
      {message ? <h1>{message}</h1> : <h1>Loading...</h1>}
      
      
      
      
      {/* 스와이퍼 컨포넌트  */}
      </Container>
    </div>
  );
};

export default Upload;