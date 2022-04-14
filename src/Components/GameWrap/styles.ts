import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 600px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
  grid-template-areas: 'buttons settings'
                       'squares squares';
`

const Box = styled.div`
  width: 600px;
  height: 600px;
  background: #dfe6e9;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-area: buttons;
`

export {Wrap, Box, Container}