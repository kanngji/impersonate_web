// 파일리스트에 등록된 파일카드자료
import React , {useState} from 'react';
import RecordComponent from './RecordComponent';
import '../styles/FileCardform.css'

// Props 타입 정의
interface FileCardProps {
    imageSrc: string;
    name: string;
    role: string | null;
    audioSrc: string;

}

const FileCard: React.FC<FileCardProps> = ({imageSrc,name,role,audioSrc}) => {
    // 음성 녹음
    
    // 음성 파일 재생 함수
    const playAudio = () => {
        const audio = new Audio(audioSrc);
        audio.play();
    }

    return (
        <div className="file-card">
            <img className="file-card-image" src={imageSrc} alt="프로필 이미지" />
            <div className="file-card-info">
                <h2 className="file-card-name">{name}</h2>
                <p className="file-card-role">{role != null ? role : '없음'}</p>
                <button className="file-card-button" onClick={playAudio}>음성 재생</button>
            </div>

            <RecordComponent/>
            
        </div>
        

        
    )
}

export default FileCard;