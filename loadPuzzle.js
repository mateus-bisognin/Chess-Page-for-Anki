const loadPuzzle = (defaultParams, PuzzleData) => {
  const { i18n, pref, theme } = defaultParams;
  const { pgn, solution, themes } = PuzzleData;

  LichessPuzzle({
    data: {
      game: {
        pgn,
      },
      puzzle: {
        solution,
        themes,
      },
      theme,
    },
    pref,
    i18n,
  });
};

loadPuzzle(defaultParams, PuzzleData);
