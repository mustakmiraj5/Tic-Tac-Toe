import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [nextValue, setNextValue] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);

    const squares = history[currentMove];

    const winner = calWinner(squares);
    let status;

    if(winner){
        status = `Winner is: ${winner}`;
    }else{
        status = `Next turn: ` + (nextValue?"X":"O");
    }

    function handleClick(i){
        if(squares[i] || winner){
            return;
        }
       const nextSq = squares.slice();
       if(nextValue){
        nextSq[i] = "X"; 
       }else{
        nextSq[i] = "O";
       }
       setNextValue(!nextValue);
       const nextHistory = [...history.slice(0, currentMove + 1), nextSq]
       setHistory(nextHistory);
       setCurrentMove(nextHistory.length -1);
    }

    function jumpTo(move){
        setCurrentMove(move);
        setNextValue(move % 2 === 0);
        console.log('c');
    }

    const moves = history.map((squares, move) => {
        let description;
        if( move > 0 ) {
            description = `Go to the move # ${move}`;
        } else {
            description = `Go to start the game`;
        }
        return(
            <li
                key={move}
                className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className='flex justify-center p-2'>
        <div>
            <h1 className='text-center font-bold text-2xl mb-4'>{status}</h1>
            <div className='flex'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className='flex'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className='flex'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
        <div className='ml-4'>
            <h1 className='font-bold text-2xl text-center mb-4'>History</h1>
            <ol className="border border-gray-400 p-1 text-lg">{ moves }</ol>
        </div>
        </div>
    );
};

function calWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0; i < lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Board;