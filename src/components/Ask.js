import { useState } from 'react';
import './Ask.css';
import tenor from '../assets/tenor.gif';
import giphy from '../assets/giphy.gif';

function Ask() {
    const [yes, setYes] = useState(false);
    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const messages = [
        "Do you wanna go out with me this valentine? 🥺",
        "Are you sure? 🐻",
        "Think again... 💖",
        "I promise I'll make you smile 🌸",
        "Okay but… I really love you 🥹❤️"
    ];

    const yesMessages = [
        "Yes",
        "Okay fine 😳",
        "Come here 🥺",
        "I promise to behave...mostly🥺"
    ];

    const [messageIndex, setMessageIndex] = useState(0);
    const [yesMessageIndex, setYesMessageIndex] = useState(0);
    const [yesScale, setYesScale] = useState(1);
    const [accepted, setAccepted] = useState(false);

    const handleHover = () => {
        console.log('hover');
        // const t1= Math.floor(Math.random()*500)+1;
        // const t2 = Math.floor(Math.random()*500)+1;
        // const i = t1 < window.innerWidth ? t1: (window.innerWidth - (window.innerWidth*0.9));
        // const j = t2 < window.innerHeight ? t2: (window.innerHeight - (window.innerHeight*0.9));
        setMessageIndex((prev) =>
            prev < messages.length - 1 ? prev + 1 : prev
        );
        setYesMessageIndex((prev) =>
            prev < yesMessages.length - 1 ? prev + 1 : prev
        );
        const i = Math.floor(Math.random()*(window.innerWidth - 100));
        const j = Math.floor(Math.random()*(window.innerHeight - 40));
        console.log(i+" "+j);
        setLeft(i);
        setTop(j);
        setYesScale((prev) => prev + 0.1);
    }
    
    const onClickYes = () => {
        setYes(true);
        setAccepted(true);
    }
    return (
        <div className="App">    
            {!yes ? <h2 className="question">{messages[messageIndex]}</h2> : <h2 className="love-text">
                    I can’t wait to take you out this Valentine 🌹❤️
                    <br />
                    <span className="mischief">
                        you’re in trouble later 😌🐻 
                    </span>
                </h2>
            }
            {yes ? <img src={giphy} alt='' className='App-logo'/> : <img src={tenor} alt='' className='App-logo'/>}
            {!yes && <div className='btn-group'>
                <button className='btn-yes' 
                style={{ transform: `scale(${yesScale})` }}
                onClick={onClickYes}>
                        {yesMessages[yesMessageIndex]}
                </button>
                <button className='btn-no'
                onMouseOver={handleHover}
                onTouchStart={handleHover}
                style={{
                    left: `${left}px`, top: `${top}px`
                }}
                >No</button>
            </div>}
            {accepted &&
                Array.from({ length: 20 }).map((_, i) => (
                    <div
                    key={i}
                    className="heart"
                    style={{
                        left: Math.random() * 100 + "%",
                        animationDelay: Math.random() * 4 + "s",
                        animationDuration: 5 + Math.random() * 3 + "s"
                    }}
                    />
            ))}


            <div className='watermark'>@rushighosalkar | ryuzaki_00</div>
        </div>
  )
}

export default Ask;