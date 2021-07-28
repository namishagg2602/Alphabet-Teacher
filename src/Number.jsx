import React from 'react';
import useSound from 'use-sound';
import audiofile from './AudioFile.js';


function Number(props){
  const [play] = useSound(audiofile[props.num]);

    return (
        <button className="backgr" onClick={play}>
        <div>
          <p>{props.num}</p>
        </div>
        </button>
    )
}


export default Number;