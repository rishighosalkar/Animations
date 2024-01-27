import './App.css';
import { useState } from 'react';
import tenor from './assets/tenor.gif';
import giphy from './assets/giphy.gif';

function App() {
  const [yes, setYes] = useState(false);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();

  const handleHover = () => {
    console.log('hover');
    // const t1= Math.floor(Math.random()*500)+1;
    // const t2 = Math.floor(Math.random()*500)+1;
    // const i = t1 < window.innerWidth ? t1: (window.innerWidth - (window.innerWidth*0.9));
    // const j = t2 < window.innerHeight ? t2: (window.innerHeight - (window.innerHeight*0.9));
    const i = Math.floor(Math.random()*(window.innerWidth - 100));
    const j = Math.floor(Math.random()*(window.innerHeight - 40));
    console.log(i+" "+j);
    setLeft(i);
    setTop(j);
  }
  
  const onClickYes = () => {
    setYes(true);
  }
  return (
    <div className="App">
      
        <h2>Do you wanna go out with me?</h2>
        {yes ? <img src={giphy} alt='' className='App-logo'/> : <img src={tenor} alt='' className='App-logo'/>}
        {!yes && <div className='btn-group'>
          <button className='btn-yes' onClick={onClickYes}>Yes</button>
          <button className='btn-no'
            onMouseOver={handleHover}
            onTouchStart={handleHover}
            style={{
               left: `${left}px`, top: `${top}px`
            }}
          >No</button>
      </div>}
      <div className='watermark'>@rushighosalkar | ryuzaki_00</div>
    </div>
  );
}

export default App;
