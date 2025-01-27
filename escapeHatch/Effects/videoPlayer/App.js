import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo} from './tiger.svg';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Playing....");
      ref.current.play();
    } else {
      console.log("Paused....");
    }
  }, [isPlaying]);

  /**
   * ref object has a stable identity: React guarantees you’ll always get the same object from the same useRef call on every render. It never changes, so it will never by itself cause the Effect to re-run. Therefore, it does not matter whether you include it or not
   */
  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  const Button = styled.button`
    ackground: transparent;
    border-radius: 3px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
  `;

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? "Playyy" : "Pause"}
      </Button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
      <div>
        <Logo />
      </div>
    </>
  );
}
