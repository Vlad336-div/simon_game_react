import React, {useState, useEffect} from 'react';
import {Wrap, Box, Container} from "./styles"
import Square from "../Square/Square";
import Settings from "../Settings/Settings";
import {playSound} from "../../helpers";

const GameWrap = (): JSX.Element => {
  const [level, setLevel] = useState<levelDifficult>("High")
  const [count, setCount] = useState<number>(0)
  const [sequence, setSequence] = useState<color[]>([])
  const [userSequence, setUserSequence] = useState<color[]>([])
  const [game, setGame] = useState<boolean>(false)
  const [step, setStep] = useState<boolean>(false)

  const colors: color[] = ['red', 'blue', 'green', 'yellow']

  const startGame = () => {
    const square: color = randomSquare();
    setSequence([square])
    playSequence()
  }

  const continueGame = () => {
    const square: color = randomSquare();
    setUserSequence([])
    setSequence(prev => [...prev, square])
    playSequence()
  }

  const restartGame = () => {
    setCount(0)
    setStep(false)
    setGame(false)
    setSequence([])
    setUserSequence([])
  }

  const stopGame = () => {
    setGame(false)
    setStep(false)
    setUserSequence([])
    setSequence([])
  }

  const randomSquare = (): color => {
    const min = Math.ceil(0);
    const max = Math.floor(4);
    const num = Math.floor(Math.random() * (max - min)) + min;
    switch (num) {
      case 0: return 'red'
      case 1: return 'blue'
      case 2: return 'green'
      case 3: return 'yellow'
      default: return 'white'
    }
  }

  const playSequence = () => {
    let levelNum = 0;
    switch (level) {
      case 'Easy':
        levelNum = 3
        break;
      case 'Medium':
        levelNum = 2
        break;
      case 'High':
        levelNum = 1
        break;
    }
    let currentIndex = 0;
    const interval = setInterval(() => {
      playSquare(levelNum, currentIndex)
      if(currentIndex++>=sequence.length) {
        clearInterval(interval);
      }
    }, levelNum*1000);
    setStep(true)
  }

  const playSquare = (levelNum: number, index: number) => {
    console.log(index)
    let color = ''
    setSequence((prev) => {
      color = prev[index]
      const el = document.querySelector(`.${color}`)
      el?.classList.add('active')
      playSound(sequence[index])
      setTimeout(() => {
        el?.classList.remove('active')
      }, levelNum*500)
      return [...prev]
    })
  }

  const clickSquare = (color: color) => {
    if (!step) return
    setUserSequence([...userSequence, color])
    if (!checkSequence(color)) stopGame()
  }

  const checkSequence = (color: color) => {
    const tempUserSequence: color[] = [...userSequence, color]
    let sequenceGame: string = ''
    let sequencePlayer: string = ''
    sequence.forEach((item: color) => sequenceGame = sequenceGame+item)
    tempUserSequence.forEach((item: color) => sequencePlayer = sequencePlayer+item)
    if (tempUserSequence.length === sequence.length && sequenceGame.indexOf(sequencePlayer) === 0) {
      continueGame()
      setCount(prev => prev+1)
      return true
    }
    return sequenceGame.indexOf(sequencePlayer) === 0
  }

  useEffect(() => {
    if (game) startGame()
  }, [game])

  return (
    <Wrap>
      <Container>
        <Box>
          {
            colors.map((color: color, idx) => {
              return <Square
                color={color}
                key={`square_${idx+1}`}
                click={(color: color) => clickSquare(color)}
              />
            })
          }
        </Box>
        <Settings
          level={level}
          changeLevel={(level: levelDifficult) => setLevel(level)}
          count={count}
          game={game}
          changeGame={(state) => setGame(state)}
          stepUser={step}
          restart={restartGame}
        />
      </Container>
    </Wrap>
  );
};

export default GameWrap;