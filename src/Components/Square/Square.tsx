import React, {memo} from 'react';
import styled from "styled-components";
import {playSound} from "../../helpers";

const setColor = (color: color): string => {
  switch(color) {
    case 'red': return '#d63031'
    case 'blue': return '#6c5ce7'
    case 'yellow': return '#fdcb6e'
    case 'green': return '#00b894'
    default: return '#fff'
  }
}

const Square = ({color, click}: ISquareProps): JSX.Element => {

  const clickSquare = () => {
    playSound(color)
    click(color)
  }

  return (
    <SquareDiv
      className={color}
      color={color}
      onClick={clickSquare}
    />
  );
};

const SquareDiv = styled.div<ISquareDivProps>`
  background: ${props => setColor(props.color)};
  width: 200px;
  height: 200px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.2);
    filter: opacity(25%);
  }
`

interface ISquareDivProps {
  color: color;
}

export default memo(Square);