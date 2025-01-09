import { useEffect, useRef, useState } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("Playing....");
      ref.current.play();
    } else {
      ref.current.pause();
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

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? "Play" : "Pause"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
