import React from 'react';
import useSound from 'use-sound';
import audiofile from './AudioFile.js';


function Alphabet(props){
  const [play] = useSound(audiofile[props.alpha]);

    return (
        <button className="backgr" onClick={play}>
        <div>
          <p>{props.alpha}</p>
        </div>
        </button>
    )
}


export default Alphabet;