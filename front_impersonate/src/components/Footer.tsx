import React from 'react';
import '../styles/Footercss.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-left">
                    <h3>회사명: Mimic voice </h3>
                    
                    </div>
                    <div className="footer-center">
                    <h3>연락처</h3>
                    <p>이메일: alleneffort1994@gmail.com</p>
                    <p>전화번호: 010-0000-0000</p>
                    </div>
                    
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Mimic Voice. All rights reserved.</p>
                </div>
             </footer>
        </div>
    );
};

export default Footer;