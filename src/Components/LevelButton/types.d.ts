interface ILevelButton {
  level: levelDifficult;
  activeLevel: levelDifficult;
  clickBtn: (level: levelDifficult) => void;
  disabled: boolean;
}