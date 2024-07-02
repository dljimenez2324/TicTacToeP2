// Import React and necessary hooks
// import React from 'react';

// Define the props interface
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

// Square component that accepts value and onSquareClick as props
const Square = ({ value, onSquareClick }:SquareProps) => {

  // handleClick function was previously used to set the value of the square
  // but now it's handled by the onSquareClick prop passed from the parent component

  return (
    <>
      {/* Render a button representing a square */}
      <button className="square colorful-button" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
