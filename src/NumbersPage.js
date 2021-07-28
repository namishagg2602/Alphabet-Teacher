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
        {/*<navigationbarnum></navigationbarnum>*/}
        {numbers.map(createcard)}
        </div>
    );
}

export default NumbersPage;