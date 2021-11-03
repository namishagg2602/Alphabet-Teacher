import React from 'react';
import { Link } from 'react-router-dom';


function Heading()
{
    /*const  {page}  = useParams().page  || 'HomePage';*/
  
    return (
        <div style={{color: 'white'}}>
            <Link to="/">Home</Link>
            <Link to="/alphabetpage">Alphabets</Link>
            <Link to="/numberspage">Numbers</Link>
            
        </div>
    );
}

export default Heading;

/*

                   <ul>
                      
                      <Link to='/'>
                        <li>HOME</li>
                      </Link>
                      <Link to='/alphabetpage'>
                        <li>ALPHABET</li>
                      </Link>
                      <Link to='/numberspage'>
                        <li>NUMBER</li>
                      </Link>

                  </ul>
                
                  */