const defaultParams = {
  theme: {
    key: "mix",
    name: "Temas de quebra-cabe\u00e7a",
    desc:
      "Um pouco de tudo. Voc\u00ea nunca sabe o que vai encontrar, ent\u00e3o esteja pronto para tudo! Igualzinho aos jogos em tabuleiros reais.",
  },
  pref: {
    blindfold: 0,
    coords: 1,
    rookCastle: 1,
    animation: {
      duration: 250,
    },
    destination: true,
    moveEvent: 2,
    highlight: true,
    is3d: false,
  },
  i18n: {
    bestMove: "Melhor jogada!",
    keepGoing: "Continue\u2026",
    notTheMove: "O movimento n\u00e3o \u00e9 este!",
    trySomethingElse: "Tente algo diferente.",
    yourTurn: "Sua vez",
    findTheBestMoveForBlack: "Encontre a melhor jogada para as pretas.",
    findTheBestMoveForWhite: "Encontre o melhor lance para as brancas.",
    viewTheSolution: "Ver solu\u00e7\u00e3o",
    puzzleSuccess: "Sucesso!",
    puzzleComplete: "Quebra-cabe\u00e7as conclu\u00eddo!",
    hidden: "oculto",
    jumpToNextPuzzleImmediately:
      "Ir para o pr\u00f3ximo problema automaticamente",
    fromGameLink: "Do jogo %s",
    puzzleId: "Quebra-cabe\u00e7a %s",
    ratingX: "Rating: %s",
    "playedXTimes:one": "Jogado %s vezes",
    playedXTimes: "Jogado %s vezes",
    continueTraining: "Continue treinando",
    didYouLikeThisPuzzle: "Voc\u00ea gostou deste quebra-cabe\u00e7as?",
    voteToLoadNextOne: "Vote para carregar o pr\u00f3ximo!",
    analysis: "An\u00e1lise",
    playWithTheMachine: "Jogar contra o computador",
    zenMode: "Modo Zen",
    depthX: "Profundidade %s",
    usingServerAnalysis: "An\u00e1lise de servidor em uso",
    loadingEngine: "Carregando ...",
    cloudAnalysis: "An\u00e1lise na nuvem",
    goDeeper: "Detalhar",
    showThreat: "Mostrar amea\u00e7a",
    gameOver: "Fim da partida",
    inLocalBrowser: "no navegador local",
    toggleLocalEvaluation: "Ativar/Desativar an\u00e1lise local",
    flipBoard: "Girar o tabuleiro",
    example: "Exemplo",
    addAnotherTheme: "Adicionar um outro tema",
    difficultyLevel: "N\u00edvel de dificuldade",
    rated: "Ranqueada",
    yourPuzzleRatingWillNotChange:
      "Sua pontua\u00e7\u00e3o de quebra-cabe\u00e7as n\u00e3o mudar\u00e1. Note que os quebra-cabe\u00e7as n\u00e3o s\u00e3o uma competi\u00e7\u00e3o. A pontua\u00e7\u00e3o indica os quebra-cabe\u00e7as que se adequam \u00e0s suas habilidades.",
    signUp: "Registrar",
    toGetPersonalizedPuzzles: "Para obter desafios personalizados:",
    "nbPointsBelowYourPuzzleRating:one":
      "Um ponto abaixo da sua classifica\u00e7\u00e3o de quebra-cabe\u00e7as",
    nbPointsBelowYourPuzzleRating:
      "%s pontos abaixo da sua classifica\u00e7\u00e3o de quebra-cabe\u00e7as",
    "nbPointsAboveYourPuzzleRating:one":
      "Um ponto acima da sua classifica\u00e7\u00e3o de quebra-cabe\u00e7as",
    nbPointsAboveYourPuzzleRating:
      "%s pontos acima da sua classifica\u00e7\u00e3o de quebra-cabe\u00e7as",
    healthyMix: "Combina\u00e7\u00e3o saud\u00e1vel",
    opening: "Abertura",
    middlegame: "Meio-jogo",
    endgame: "Finais",
    rookEndgame: "Finais de Torres",
    bishopEndgame: "Finais de bispo",
    pawnEndgame: "Finais de pe\u00f5es",
    knightEndgame: "Finais de Cavalo",
    queenEndgame: "Finais de Dama",
    queenRookEndgame: "Finais de Dama e Torre",
    advancedPawn: "Pe\u00e3o avan\u00e7ado",
    attackingF2F7: "Atacando f2 ou f7",
    capturingDefender: "Capture o defensor",
    discoveredAttack: "Ataque descoberto",
    doubleCheck: "Xeque duplo",
    exposedKing: "Rei exposto",
    fork: "Garfo (ou duplo)",
    hangingPiece: "Pe\u00e7a pendurada",
    kingsideAttack: "Ataque na ala do Rei",
    pin: "Cravada",
    queensideAttack: "Ataque na ala da dama",
    sacrifice: "Sacrif\u00edcio",
    skewer: "Raio X",
    trappedPiece: "Pe\u00e7a presa",
    attraction: "Atra\u00e7\u00e3o",
    clearance: "Lance \u00fatil",
    defensiveMove: "Movimento defensivo",
    deflection: "Desvio",
    interference: "Interfer\u00eancia",
    intermezzo: "Lance intermedi\u00e1rio",
    quietMove: "Lance de prepara\u00e7\u00e3o",
    xRayAttack: "Ataque em raio X",
    zugzwang: "Zugzwang",
    mate: "Xeque-mate",
    mateIn1: "Mate em 1",
    mateIn2: "Mate em 2",
    mateIn3: "Mate em 3",
    mateIn4: "Mate em 4",
    mateIn5: "Mate em 5 ou mais",
    anastasiaMate: "Mate Anastasia",
    arabianMate: "Mate \u00e1rabe",
    backRankMate: "Mate do corredor",
    bodenMate: "Mate de Boden",
    doubleBishopMate: "Mate de dois bispos",
    dovetailMate: "Mate da cauda de andorinha",
    hookMate: "Xeque gancho",
    smotheredMate: "Mate de Philidor (mate sufocado)",
    castling: "Roque",
    promotion: "Promo\u00e7\u00e3o",
    underPromotion: "Subpromo\u00e7\u00e3o",
    equality: "Igualdade",
    advantage: "Vantagem",
    crushing: "Punindo",
    oneMove: "Quebra-cabe\u00e7as de um movimento",
    short: "Quebra-cabe\u00e7as curto",
    long: "Quebra-cabe\u00e7as longo",
    veryLong: "Quebra-cabe\u00e7as muito longo",
    master: "Partidas de mestres",
    masterVsMaster: "Partidas de Mestre vs Mestre",
    superGM: "Super partidas de GMs",
    healthyMixDescription:
      "Um pouco de tudo. Voc\u00ea nunca sabe o que vai encontrar, ent\u00e3o esteja pronto para tudo! Igualzinho aos jogos em tabuleiros reais.",
    openingDescription: "T\u00e1tica durante a primeira fase do jogo.",
    middlegameDescription: "T\u00e1tica durante a segunda fase do jogo.",
    endgameDescription: "T\u00e1tica durante a \u00faltima fase do jogo.",
    rookEndgameDescription: "Um final com apenas torres e pe\u00f5es.",
    bishopEndgameDescription: "Final com somente bispos e pe\u00f5es.",
    pawnEndgameDescription: "Um final apenas com pe\u00f5es.",
    knightEndgameDescription:
      "Um final jogado apenas com cavalos e pe\u00f5es.",
    queenEndgameDescription: "Um final com apenas damas e pe\u00f5es.",
    queenRookEndgameDescription: "Finais com apenas Dama, Torre e Pe\u00f5es.",
    advancedPawnDescription:
      "Um pe\u00e3o prestes a ser promovido ou \u00e0 beira da promo\u00e7\u00e3o \u00e9 um tema t\u00e1tico.",
    attackingF2F7Description:
      "Um ataque focado no pe\u00e3o de f2 e no pe\u00e3o de f7, como na abertura frango frito.",
    capturingDefenderDescription:
      "Remover uma pe\u00e7a que seja importante na defesa de outra, permitindo que agora a pe\u00e7a indefesa seja capturada na jogada seguinte.",
    discoveredAttackDescription:
      "Mover uma pe\u00e7a que anteriormente bloqueava um ataque de uma pe\u00e7a de longo alcance, como por exemplo um cavalo liberando a coluna de uma torre.",
    doubleCheckDescription:
      "Dar Xeque com duas pe\u00e7as ao mesmo tempo, como resultado de um ataque descoberto onde tanto a pe\u00e7a que se move quanto a pe\u00e7a que estava sendo obstru\u00edda atacam o rei do oponente.",
    exposedKingDescription:
      "Uma t\u00e1tica que envolve um rei com poucos defensores ao seu redor, muitas vezes levando a xeque-mate.",
    forkDescription:
      "Um movimento onde a pe\u00e7a movida ataca duas pe\u00e7as de oponente de uma s\u00f3 vez.",
    hangingPieceDescription:
      "Uma t\u00e1ctica que envolve uma pe\u00e7a indefesa do oponente ou insuficientemente defendida e livre para ser capturada.",
    kingsideAttackDescription:
      "Um ataque ao rei do oponente, ap\u00f3s ele ter efetuado o roque curto.",
    pinDescription:
      "Uma t\u00e1tica envolvendo cravada, onde uma pe\u00e7a \u00e9 incapaz de mover-se sem abrir um descoberto em uma pe\u00e7a de maior valor.",
    queensideAttackDescription:
      "Um ataque ao rei advers\u00e1rio, ap\u00f3s ter efetuado o roque na ala da Dama.",
    sacrificeDescription:
      "Uma t\u00e1tica envolvendo a entrega de material no curto prazo, com o objetivo de se obter uma vantagem ap\u00f3s uma sequ\u00eancia for\u00e7ada de movimentos.",
    skewerDescription:
      "Um movimento que envolve uma pe\u00e7a de alto valor sendo atacada fugindo do ataque e permitindo que uma pe\u00e7a de menor valor seja capturada ou atacada, o inverso de cravada.",
    trappedPieceDescription:
      "Uma pe\u00e7a \u00e9 incapaz de escapar da captura, pois tem movimentos limitados.",
    attractionDescription:
      "Uma troca ou sacrif\u00edcio encorajando ou for\u00e7ando uma pe\u00e7a do oponente a uma casa que permite uma sequ\u00eancia t\u00e1tica.",
    clearanceDescription:
      "Um lance, \u00e0s vezes consumindo tempos, que libera uma casa, fileira ou diagonal para uma ideia t\u00e1tica em seguida.",
    defensiveMoveDescription:
      "Um movimento preciso ou sequ\u00eancia de movimentos que s\u00e3o necess\u00e1rios para evitar perda de material ou outra vantagem.",
    deflectionDescription:
      "Um movimento que desvia a pe\u00e7a do oponente da sua fun\u00e7\u00e3o, por exemplo a de defesa de outra pe\u00e7a ou a defesa de uma casa importante.",
    interferenceDescription:
      "Mover uma pe\u00e7a entre duas pe\u00e7as do oponente para deixar uma ou duas pe\u00e7as do oponente indefesas, como um cavalo em uma casa defendida por duas torres.",
    intermezzoDescription:
      "Em vez de jogar o movimento esperado, primeiro realiza outro movimento criando uma amea\u00e7a imediata a que o oponente deve responder. Tamb\u00e9m conhecido como \u0022Zwischenzug\u0022 ou \u0022In between\u0022.",
    quietMoveDescription:
      "Um lance que n\u00e3o d\u00e1 xeque nem realiza uma captura, mas prepara uma amea\u00e7a inevit\u00e1vel para a jogada seguinte.",
    xRayAttackDescription:
      "Uma pe\u00e7a ataca ou defende uma casa indiretamente, atrav\u00e9s de uma pe\u00e7a advers\u00e1ria.",
    zugzwangDescription:
      "O advers\u00e1rio tem os seus movimentos limitados, e qualquer movimento que ele fa\u00e7a vai enfraquecer sua pr\u00f3pria posi\u00e7\u00e3o.",
    mateDescription: "Ven\u00e7a o jogo com estilo.",
    mateIn1Description: "Dar xeque-mate em um movimento.",
    mateIn2Description: "Dar xeque-mate em dois movimentos.",
    mateIn3Description: "Dar xeque-mate em tr\u00eas movimentos.",
    mateIn4Description: "Dar xeque-mate em 4 movimentos.",
    mateIn5Description: "Descubra uma longa sequ\u00eancia de mate.",
    anastasiaMateDescription:
      "Um cavalo e uma torre se unem para prender o rei do oponente entre a lateral do tabuleiro e uma pe\u00e7a amiga.",
    arabianMateDescription:
      "Um cavalo e uma torre se unem para prender o rei inimigo em um canto do tabuleiro.",
    backRankMateDescription:
      "D\u00ea o xeque-mate no rei na \u00faltima fileira, quando ele estiver bloqueado pelas pr\u00f3prias pe\u00e7as.",
    bodenMateDescription:
      "Dois bispos atacantes em diagonais cruzadas d\u00e3o um mate em um rei obstru\u00eddo por pe\u00e7as amigas.",
    doubleBishopMateDescription:
      "Dois bispos atacantes em diagonais adjacentes d\u00e3o um mate em um rei obstru\u00eddo por pe\u00e7as amigas.",
    dovetailMateDescription:
      "Uma dama d\u00e1 um mate em um rei adjacente, cujos \u00fanicos dois quadrados de fuga est\u00e3o obstru\u00eddos por pe\u00e7as amigas.",
    hookMateDescription:
      "Xeque-mate com uma torre, um cavalo e um pe\u00e3o, juntamente com um pe\u00e3o inimigo, para limitar a fuga do rei.",
    smotheredMateDescription:
      "Um xeque-mate dado por um cavalo onde o rei \u00e9 incapaz de mover-se porque est\u00e1 cercado (ou sufocado) pelas pr\u00f3prias pe\u00e7as.",
    castlingDescription:
      "Traga o seu rei para a seguran\u00e7a, e prepare sua torre para o ataque.",
    enPassantDescription:
      "Uma t\u00e1tica envolvendo a regra do en passant, onde um pe\u00e3o pode capturar um pe\u00e3o do oponente que passou por ele usando seu movimento inicial de duas casas.",
    promotionDescription:
      "Promova um pe\u00e3o para uma dama ou a uma pe\u00e7a menor.",
    underPromotionDescription: "Promover para cavalo, bispo ou torre.",
    equalityDescription:
      "Saia de uma posi\u00e7\u00e3o perdida, e assegure um empate ou uma posi\u00e7\u00e3o equilibrada. (aval \u2264 200cp)",
    advantageDescription:
      "Aproveite a sua chance de ter uma vantagem decisiva. (200cp \u2264 eval \u2264 600cp)",
    crushingDescription:
      "Perceba a capivarada do oponente para obter uma vantagem decisiva. (vantagem \u2265 600cp)",
    oneMoveDescription: "Quebra-cabe\u00e7as de um movimento.",
    shortDescription: "Vit\u00f3ria em dois lances.",
    longDescription: "Vit\u00f3ria em tr\u00eas movimentos.",
    veryLongDescription: "Quatro movimentos ou mais para vencer.",
    masterDescription:
      "Quebra-cabe\u00e7as de partidas jogadas por jogadores titulados.",
    masterVsMasterDescription:
      "Quebra-cabe\u00e7as de partidas entre dois jogadores titulados.",
    superGMDescription:
      "Quebra-cabe\u00e7as de partidas jogadas pelos melhores jogadores do mundo.",
    easiest: "Muito f\u00e1cil",
    easier: "F\u00e1cil",
    normal: "Normal",
    harder: "Dif\u00edcil",
    hardest: "Muito dif\u00edcil",
    enPassant: "En passant",
  },
};
