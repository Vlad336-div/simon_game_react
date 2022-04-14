import {memo} from 'react';
import styled from "styled-components";

const LevelButton = ({level, activeLevel, clickBtn, disabled}: ILevelButton): JSX.Element => {


  return (
    <BtnLevel
      onClick={() => clickBtn(level)}
      active={level === activeLevel}
      disabled={disabled}
    >
      {level}
    </BtnLevel>
  );
};

const BtnLevel = styled.button<IBtnLevelProps>`
  //background: ${props => props.active ? '#d63031' : '#ff7675'};
  background: ${props => props.disabled ? '#7f8c8d' : props => props.active ? '#d63031' : '#ff7675'};
  padding: 5px 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  color: ${props => props.disabled ? "#2d3436" : "#fff"};
  margin-bottom: 15px;
  height: 50px;
  
  &:hover {
    background: ${props => props.disabled ? "#95a5a6" : "#d63031"};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

interface IBtnLevelProps {
  active: boolean;
  disabled: boolean;
}

export default memo(LevelButton);