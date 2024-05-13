import React ,{useState} from 'react';
import '../styles/Signup.css'

interface SignUpFormData {
    email: string;
    password: string;
    confirmPassword: string;
    nickname: string;
  }

  const SignupComponent =() => {
    const [formData, setFormData] = useState<SignUpFormData>({
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // 여기에서 회원가입 로직을 처리할 수 있습니다.
      console.log('Form Data:', formData);
    };
  
    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label>이메일</label>
                <input
                placeholder='abcd@gmail.com'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>비밀번호</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>비밀번호 확인</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>닉네임</label>
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">회원가입</button>
            </form>
        </div>
            
    )
}

export default SignupComponent;