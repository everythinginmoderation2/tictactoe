import React, {useState} from "react";
import Square from "./Square";
import {ListGroup} from 'react-bootstrap'

function Board({value}) {
  const renderSquare = (i) => {
    return <Square value={squares[i]} index={i} handleSquareClick={((i) => {
        if(!squares[i] && !winner) {
            let newSquares =[...squares]
            let value = isXNext ? "X" : "O"
            newSquares[i] = value
            // setSquares(newSquares)
            const newHistory = history.concat([newSquares])
            setStepNumber(stepNumber + 1)
            setHistory(newHistory)
            setIsXNext(!isXNext)
            checkWinner(newSquares)
        }
    })}/>;
  };
  // const [squares, setSquares] = useState(Array(9))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState(null)
  const [history, setHistory] = useState([Array(9)])
  const [stepNumber, setStepNumber] = useState(0)
  const squares = history[stepNumber]

  const checkWinner = (newSquares) => {
    if(newSquares[0] === newSquares[1] && newSquares[1] === newSquares[2]) {
        setWinner(newSquares[0])
    }
    if(newSquares[0] === newSquares[3] && newSquares[3] === newSquares[6]) {
        setWinner(newSquares[0])
    }
    if(newSquares[0] === newSquares[4] && newSquares[4] === newSquares[8]) {
        setWinner(newSquares[0])
    }
    if(newSquares[1] === newSquares[4] && newSquares[4] === newSquares[7]) {
        setWinner(newSquares[1])
    }
    if(newSquares[2] === newSquares[4] && newSquares[4] === newSquares[6]) {
        setWinner(newSquares[2])
    }
    if(newSquares[2] === newSquares[5] && newSquares[5] === newSquares[8]) {
        setWinner(newSquares[2])
    }
    if(newSquares[3] === newSquares[4] && newSquares[4] === newSquares[5]) {
        setWinner(newSquares[3])
    }
    if(newSquares[6] === newSquares[7] && newSquares[7] === newSquares[8]) {
        setWinner(newSquares[6])
    }
  }

  const jumpTo = (i) => {
    const newHistory = history.slice(0, i + 1)
    setHistory(newHistory)
    setStepNumber(i)
  }

  return (
    <div>
       <ListGroup>
            {history.map((h, i) => (<ListGroup.Item key={i}><button onClick={() => jumpTo(i)}>Jump to turn {i + 1}</button></ListGroup.Item>))}
        </ListGroup>
      <h2 className="status">Next player: {isXNext ? "X" : "O"}</h2>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
