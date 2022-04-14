interface ISettingsProps {
  level: levelDifficult;
  changeLevel: (level: levelDifficult) => void;
  count: number;
  game: boolean;
  changeGame: (state: boolean) => void;
  stepUser: boolean;
  restart: () => void;
}