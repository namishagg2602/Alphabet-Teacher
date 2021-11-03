import React from 'react';
import numbers from './numbers';
import Number from './Number';


function  createcard(numbers)
{
    return(
       <Number
           key={numbers.id}
           num={numbers.name}
       />
    );
}


function NumbersPage()
{
    return(
        <div>
        <center>
            {numbers.map(createcard)}
        </center>
        </div>
    );
}

export default NumbersPage;