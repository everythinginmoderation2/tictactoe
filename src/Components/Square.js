import React from 'react'

const Square = ({value, index, handleSquareClick}) => {
    
          return  <button className="square" onClick={() => handleSquareClick(index)}>{value}</button>;

}

export default Square
