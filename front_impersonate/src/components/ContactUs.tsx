import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
import '../styles/ContactUsform.css'

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    if (!form.current) {
      console.error("환경 변수가 설정되지 않았거나 올바르지 않습니다.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_mailjs_service_id,
        import.meta.env.VITE_mailjs_template_id,
        form.current,
        import.meta.env.VITE_mailjs_public_key
      )
      .then(
        (result) => {
          navigate('/'); // 메인 페이지로 이동
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      
      <label>이메일</label>
      <input type="email" name="from_email" />
      <label>내용</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};