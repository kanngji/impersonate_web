import React, {useState} from 'react';
import '../styles/Loginform.css'
import { useNavigate } from 'react-router-dom';

interface LoginForm {
    id: string;
    password: string;
}
const LoginComponent = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<LoginForm>({
        id:'',
        password:'',
    })

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target;
        setFormData({...formData, [name]:value});
        // console.log(formData.id);
    }

    const handleLogin =() => {
        // 로그인 처리 로직을 여기에 추가
    }

    const handleSignUp = () =>{
        // 회원가입 페이지로 이동하는 로직을 여기에 추가
        navigate("/signup")
    }


    return (
        <div className="login-container">
            <h1>로그인</h1>
            <form>
                <div className="form-group">
                <label htmlFor="id">ID:</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-group">
                <label htmlFor="password">비밀번호:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                </div>
                <div className="button-group">
                <button className="register-Btn" type="button" onClick={handleSignUp}>회원가입</button>
                <button className="login-Btn" type="button" onClick={handleLogin}>로그인</button>
                
                </div>
            </form>
        </div>
    );
};

export default LoginComponent;