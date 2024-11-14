import React from 'react';

const Square = ({value, onSquareClick}) => {
    return (
        <button className='h-12 w-12 m-1 p-2 border-2 border-gray-950' onClick={onSquareClick}>
            {value}
        </button>
    );
};

export default Square;