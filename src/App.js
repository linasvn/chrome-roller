import { useState, useEffect, useRef } from 'react';
import './App.scss';
import World from './assets/World';
import Lock from './assets/Lock';

function App() {
  const [activeTab, setActiveTab] = useState('public');
  const [exiting, setExiting] = useState(false);
  const [hasExited, setHasExited] = useState(false);
  const leave = useRef(true);
  const animation = useRef(null);

  const exit = () => {
    setExiting(true);
    const timerOnExit = setInterval(() => {
      setHasExited(true);
      window.close();
    }, 799);
    return () => clearInterval(timerOnExit);
  }

  useEffect(() => {
    animation.current = document.getElementById('progress');
    animation.current.addEventListener('animationend', exit);
    return () => {
      animation.current.removeEventListener('animationend', exit);
    }
  }, []);

  const setTab = (tab) => {
    setActiveTab(tab);
    setLeave(false);
  }

  const setLeave = (set) => {
    leave.current = set;
    if (!set) {
      animation.current.removeAttribute('id');
      animation.current.removeEventListener('animationend', exit);
    }
  }

  if (hasExited) return null;

  return (
      <div className={`roller flex column align-center gap-16 ${exiting ? 'exit' : ''}`}>
        <div className="header">
          <div className="btn cancel" onClick={exit}>Cancel</div>
          <div className="name">Roll up</div>
        </div>
        <textarea placeholder="Add a note..." onFocus={() => setLeave(false)}/>
        <div className="btns flex align-center justify-between gap-4">
          <div className="tabs flex align-center justify-center">
            <div className={`btn tab flex align-center justify-center gap-4 ${activeTab === 'public' ? "active" : ""}`} onClick={() => setTab('public')}><World /> World</div>
            <div className={`btn tab flex align-center justify-center gap-4 ${activeTab === 'private' ? "active" : ""}`} onClick={() => setTab('private')}><Lock /> Myself</div>
          </div>
          <button onClick={exit} type="submit" className={`btn done ${!exiting ? 'load' : ''}`}><span>Done</span><span id="progress"></span></button>
        </div>
      </div>
  );
}

export default App;
