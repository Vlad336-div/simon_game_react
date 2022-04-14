import {memo} from 'react';
import {BtnsWrap, ButtonStart, ButtonRestart, SettingsWrap, LevelWrap, CountWrap} from "./styles";
import LevelButton from "../LevelButton/LevelButton";

const Settings = ({level, changeLevel, count, game, changeGame, stepUser, restart}: ISettingsProps): JSX.Element => {
  return (
    <SettingsWrap>
      <BtnsWrap>
        {game
          ?
          <ButtonRestart onClick={restart}>Restart</ButtonRestart>
          :
          <ButtonStart
            onClick={() => changeGame(!game)}
          >Start</ButtonStart>
        }
      </BtnsWrap>
      <LevelWrap>
        <LevelButton
          level="Easy"
          activeLevel={level}
          clickBtn={(newLevel: levelDifficult) => changeLevel(newLevel)}
          disabled={stepUser}
        />
        <LevelButton
          level="Medium"
          activeLevel={level}
          clickBtn={(newLevel: levelDifficult) => changeLevel(newLevel)}
          disabled={stepUser}
        />
        <LevelButton
          level="High"
          activeLevel={level}
          clickBtn={(newLevel: levelDifficult) => changeLevel(newLevel)}
          disabled={stepUser}
        />
      </LevelWrap>
      <CountWrap>
        Count: <span>{count}</span>
      </CountWrap>
    </SettingsWrap>
  );
};

export default memo(Settings);