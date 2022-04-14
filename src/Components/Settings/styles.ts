import styled from "styled-components";

const SettingsWrap = styled.div`
  width: 200px;
  grid-area: settings;
  display: flex;
  flex-direction: column;
`

const BtnsWrap = styled.div`
  background: #dfe6e9;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 15px;
  height: auto;
`

const ButtonStart = styled.button`
  background: #00b894;
  border-radius: 4px;
  color: #fff;
  padding: 5px 0;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  height: 50px;
  
  &:hover {
    background: #55efc4;
  }
`

const ButtonRestart = styled.button`
  background: #fdcb6e;
  border-radius: 4px;
  padding: 5px 0;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  height: 50px;
  
  &:hover {
    background: #ffeaa7;
  }
`

const LevelWrap = styled.div`
  background: #dfe6e9;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 15px;
  height: auto;
`

const CountWrap = styled.div`
  background: #dfe6e9;
  border-radius: 12px;
  padding: 10px;
  height: auto;
  
  & span {
    font-weight: bold;
  }
`

export {BtnsWrap, ButtonStart, SettingsWrap, LevelWrap, CountWrap, ButtonRestart}