import React from 'react';
import Alphabet from './Alphabet';
import alphabets from './alphabets';

/*function to create a card of Alphabet*/
function createcard(alphabets)
{
  return( 
  <Alphabet
     key={alphabets.id}
     alpha={alphabets.name}
  /> );
}

function AlphabetPage()
{
  return (
 <div>
 <p> ABVUCVHGVJHV</p>
  {/*<navigationbaralpha/>*/}
  {alphabets.map(createcard)}
  </div>

  );
}
export default AlphabetPage;


 /* map function acts as an iterator over an array of elements 
inside 'alphabets' and calls createcard function for each one of them*/
  