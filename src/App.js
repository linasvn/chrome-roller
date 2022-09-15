import { useState } from 'react';
import './App.scss';
import World from './assets/World';
import Lock from './assets/Lock';

function App() {
  const [isActiveTab, setIsActiveTab] = useState('public');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      clearTimeout(timer);
    }, 4500);
  }

  return (
      <div className="roller flex column align-center gap-16">
        <div className="header">
          <div className="btn cancel">Cancel</div>
          <div className="name">Roll up</div>
        </div>
       
        <textarea placeholder="Add a note..." />
        <div className="btns flex align-center justify-between gap-4">
          <div className="tabs flex align-center justify-center">
            <div className={`btn tab flex align-center justify-center gap-4 ${isActiveTab === 'public' ? "active" : ""}`} onClick={() => setIsActiveTab('public')}><World /> World</div>
            <div className={`btn tab flex align-center justify-center gap-4 ${isActiveTab === 'private' ? "active" : ""}`} onClick={() => setIsActiveTab('private')}><Lock /> Myself</div>
          </div>
          <button disabled={loading} type="submit" className={`btn done ${loading ? "load" : ""}`} onClick={handleSubmit}>Done</button>
        </div>

        
      </div>
  );
}

export default App;
