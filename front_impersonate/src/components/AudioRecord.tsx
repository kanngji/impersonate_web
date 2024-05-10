import React, { useState, useCallback } from "react";

const AudioRecord: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | undefined>();
  const [media, setMedia] = useState<MediaRecorder | undefined>();
  const [onRec, setOnRec] = useState<boolean>(true);
  const [source, setSource] = useState<MediaStreamAudioSourceNode | undefined>();
  const [analyser, setAnalyser] = useState<ScriptProcessorNode | undefined>();
  const [audioUrl, setAudioUrl] = useState<Blob | undefined>();

  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null); // 새로운 상태 추가

  const onRecAudio = () => {
    const audioCtx = new (window.AudioContext || window.AudioContext)();
    const analyserNode = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyserNode);

    function makeSound(stream: MediaStream) {
      const sourceNode = audioCtx.createMediaStreamSource(stream);
      setSource(sourceNode);
      sourceNode.connect(analyserNode);
      analyserNode.connect(audioCtx.destination);
    }

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);

      analyserNode.onaudioprocess = function (e) {
        if (e.playbackTime > 180) {
          stream.getAudioTracks().forEach(function (track) {
            track.stop();
          });
          mediaRecorder.stop();
          if (analyser && source) {
            analyser.disconnect();
            source.disconnect();
          }

          mediaRecorder.ondataavailable = function (e) {
            setAudioUrl(e.data);
            setOnRec(true);
          };
        } else {
          setOnRec(false);
        }
      };
    });
  };

  const offRecAudio = () => {
    if (media) {
      media.ondataavailable = function (e) {
        setAudioUrl(e.data);
        setOnRec(true);
      };

      if (stream) {
        stream.getAudioTracks().forEach(function (track) {
          track.stop();
        });
      }

      media.stop();
    }
    if (analyser && source) {
      analyser.disconnect();
      source.disconnect();
    }
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      const audioBlobUrl = URL.createObjectURL(audioUrl); // Blob을 URL로 변환
      if (audioElement) {
        audioElement.src = audioBlobUrl; // 오디오 요소에 URL 할당
        audioElement.play(); // 오디오 재생
      }
      const sound = new File([audioUrl], "soundBlob", { lastModified: new Date().getTime(), type: "audio" });
      console.log(sound);
    }
  }, [audioUrl, audioElement]); // 의존성 목록에 audioElement 추가

  return (
    <>
      <button onClick={onRec ? onRecAudio : offRecAudio}>녹음</button>
      <button onClick={onSubmitAudioFile}>결과 확인</button>
      <audio ref={setAudioElement} controls /> {/* 오디오 요소 추가 */}
    </>
  );
};

export default AudioRecord;
