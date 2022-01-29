const loadPuzzle = (defaultParams, PuzzleData) => {
  const { i18n, pref, theme } = defaultParams;
  const { fen, pgn, solution, themes } = PuzzleData;

  LichessPuzzle({
    data: {
      game: {
        pgn,
      },
      puzzle: {
        fen,
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
