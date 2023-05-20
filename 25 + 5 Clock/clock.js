const App = () => {
  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const [timeLeft, setTimeLeft] = React.useState(1500);
  const [timingType, setTimingType] = React.useState("SESSION");
  
  const [play, setPlay] = React.useState(false);
  const progressBar = document.querySelector('.progress');

  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1);
      updateProgress();
    }
  }, 1000);

  const handleBreakDecrease = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  }

  const handleBreakIncrease = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }

  const handleSessionDecrease = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setTimeLeft(timeLeft - 60);
    }
  }

  const handleSessionIncrease = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setTimeLeft(timeLeft + 60);
    }
  }

  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    setTimeLeft(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimingType("SESSION");
    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
    document.querySelector(".play-button").classList.remove("play");
    document.querySelector(".reset-button").classList.remove("reset");
    document.querySelector(".progress-bar").classList.remove("progress");
    document.querySelector(".progress-bar").style.clip = `rect(0px, 400px, 800px, 0px)`;
    document.querySelector('.progress-bar').style.borderColor = '#00AEFF';
  }

  const handlePlay = () => {
    clearTimeout(timeout);
    setPlay(!play);
    dclassBtn();
  }

  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if (!timeLeft && timingType === "SESSION") {
      setTimeLeft(breakLength * 60)
      setTimingType("BREAK")
      audio.play()
      progressBar.style.borderColor = "#39AEA9";
    }
    if (!timeLeft && timingType === "BREAK") {
      setTimeLeft(sessionLength * 60)
      setTimingType("SESSION")
      audio.pause()
      audio.currentTime = 0;
      progressBar.style.borderColor = "#00AEFF";
    }
  }
  
  const clock = () => {
    if (play) {
      timeout
      resetTimer()
    } else {
      clearTimeout(timeout)
    }
  }

  React.useEffect(() => {
    clock()}, [play, timeLeft, timeout])

  const timeFormatter = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft - minutes * 60;
    const minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
    const secondsDisplay = seconds < 10 ? "0" + seconds : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  const title = timingType === "SESSION" ? "Session" : "Break";
  
  function dclassBtn() {
    const a = document.querySelector(".play-button");
    const b = document.querySelector(".reset-button");
    const c = document.querySelector(".progress-bar");
    if (!play) {
      a.classList.add("play");
      b.classList.add("reset");
      c.classList.add("progress");
  } else {
    a.classList.remove("play");
    b.classList.remove("reset");
    c.classList.remove("progress");
  }
}
  
  function updateProgress() {
    const progress = (1 - timeLeft / (25 * 60)) * 800.600;
    progressBar.style.clip = `rect(0px, ${progress}px, 800px, 0px)`;
  }

  return (
  <div className="container">
    <div className="progress-bar"></div>
      <div className="wrapper">
        <h2 className="title">25 + 5 Clock</h2>
        <div className="break-session-length">
          <div className="break-container">
            <p id="break-label">Break Length</p>
            <div className="break">
              <button disabled={play} onClick={handleBreakDecrease} id="break-decrement">-</button>
              <p id="break-length">{breakLength}</p>
              <button disabled={play} onClick={handleBreakIncrease} id="break-increment">+</button>
            </div>
          </div>
          <div className="session-container">
            <p id="session-label">Session Length</p>
            <div className="session">
              <button disabled={play} onClick={handleSessionDecrease} id="session-decrement">-</button>
              <p id="session-length">{sessionLength}</p>
              <button disabled={play} onClick={handleSessionIncrease} id="session-increment">+</button>
            </div>
          </div>
        </div>
        <div className="timer-wrapper">
          <div className="timer">
            <h2 id="timer-label">{title}</h2>       
            <h3 id="time-left">{timeFormatter()}</h3>
          </div>
          <div className="button-wrapper">
            <div className="button-start">
              <button onClick={handlePlay} id="start_stop" className="play-button"></button>
            </div>
            <div className="button-reset">
              <button onClick={handleReset} id="reset" className="reset-button"></button>
            </div>
          </div>
        </div>
      </div>
      <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));