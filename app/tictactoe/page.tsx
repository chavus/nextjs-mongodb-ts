'use client';
import './styles.css'
import { useState } from 'react'

function Square( {value, onSquareClick}:{value:string|null, onSquareClick:()=>void}){
    //  const [value, setValue] = useState<string | null>(null)

    return <button className='square' onClick={onSquareClick}>{value}</button>    
}

export default function Board(){
    const [squares,setSquares] = useState(Array(9).fill(null))
    const [xIsNext,setXIsNext] = useState(true)

    function onSquareClick(i:number){
        if (!squares[i]){
            const nextSquares = squares.slice()
            nextSquares[i] = xIsNext ? 'X' : 'O'
            setSquares(nextSquares)
            setXIsNext(!xIsNext)
        }
    }

    function startOver(){
        const nextSquares = squares.slice()
        nextSquares.fill(null)
        setSquares(nextSquares)
        setXIsNext(true)
    }

    return (
        <>
            <h3>Turn: {xIsNext ? 'X' : 'O'}</h3>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={()=>onSquareClick(0)}/>
                <Square value={squares[1]} onSquareClick={()=>onSquareClick(1)}/>
                <Square value={squares[2]} onSquareClick={()=>onSquareClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={()=>onSquareClick(3)}/>
                <Square value={squares[4]} onSquareClick={()=>onSquareClick(4)}/>
                <Square value={squares[5]} onSquareClick={()=>onSquareClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={()=>onSquareClick(6)}/>
                <Square value={squares[7]} onSquareClick={()=>onSquareClick(7)}/>
                <Square value={squares[8]} onSquareClick={()=>onSquareClick(8)}/>
            </div>
            <button onClick={startOver}>Start Over</button>
        </>
    )
}
