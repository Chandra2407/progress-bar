import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [progressState, setProgressState] = useState(0);
  useEffect(() => {
    let timer;
    if (progressState < 100) {
      timer = setTimeout(() => {
        setProgressState((prevState) => {
          return prevState + 5;
        });
      }, 100);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [progressState]);
  return (
    <div className="App">
      <ProgressBar progressState={progressState} />
    </div>
  );
}

const ProgressBar = function ({ progressState }) {
  console.log(progressState);

  return (
    <>
      <div className="progress-bar">
        <div
          className="overlay"
          style={{
            transform: `translateX(${progressState - 100}%)`,
            background: "red",
            height: "10px",
          }}
        >
          <span
            style={{
              marginRight: "10px",
            }}
          >
            {progressState}%
          </span>
        </div>
      </div>
    </>
  );
};
