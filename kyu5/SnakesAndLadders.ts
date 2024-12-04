export class SnakesLadders {
  private board: { field: number; moveTo?: number }[] = [
    { field: 0 },
    { field: 1 },
    { field: 2, moveTo: 38 },
    { field: 3 },
    { field: 4 },
    { field: 5 },
    { field: 6 },
    { field: 7, moveTo: 14 },
    { field: 8, moveTo: 31 },
    { field: 9 },
    { field: 10 },
    { field: 11 },
    { field: 12 },
    { field: 13 },
    { field: 14 },
    { field: 15, moveTo: 26 },
    { field: 16, moveTo: 6 },
    { field: 17 },
    { field: 18 },
    { field: 19 },
    { field: 20 },
    { field: 21, moveTo: 42 },
    { field: 22 },
    { field: 23 },
    { field: 24 },
    { field: 25 },
    { field: 26 },
    { field: 27 },
    { field: 28, moveTo: 84 },
    { field: 29 },
    { field: 30 },
    { field: 31 },
    { field: 32 },
    { field: 33 },
    { field: 34 },
    { field: 35 },
    { field: 36, moveTo: 44 },
    { field: 37 },
    { field: 38 },
    { field: 39 },
    { field: 40 },
    { field: 41 },
    { field: 42 },
    { field: 43 },
    { field: 44 },
    { field: 45 },
    { field: 46, moveTo: 25 },
    { field: 47 },
    { field: 48 },
    { field: 49, moveTo: 11 },
    { field: 50 },
    { field: 51, moveTo: 67 },
    { field: 52 },
    { field: 53 },
    { field: 54 },
    { field: 55 },
    { field: 56 },
    { field: 57 },
    { field: 58 },
    { field: 59 },
    { field: 60 },
    { field: 61 },
    { field: 62, moveTo: 19 },
    { field: 63 },
    { field: 64, moveTo: 60 },
    { field: 65 },
    { field: 66 },
    { field: 67 },
    { field: 68 },
    { field: 69 },
    { field: 70 },
    { field: 71, moveTo: 94 },
    { field: 72 },
    { field: 73 },
    { field: 74, moveTo: 53 },
    { field: 75 },
    { field: 76 },
    { field: 77 },
    { field: 78, moveTo: 98 },
    { field: 79 },
    { field: 80 },
    { field: 81 },
    { field: 82 },
    { field: 83 },
    { field: 84 },
    { field: 85 },
    { field: 86 },
    { field: 87, moveTo: 94 },
    { field: 88 },
    { field: 89, moveTo: 68 },
    { field: 90 },
    { field: 91 },
    { field: 92, moveTo: 88 },
    { field: 93 },
    { field: 94 },
    { field: 95, moveTo: 75 },
    { field: 96 },
    { field: 97 },
    { field: 98 },
    { field: 99, moveTo: 80 },
    { field: 100 },
  ];
  private isPlayersTurn = true;
  private isGameOver = false;
  private gameOverString = 'Game over!';
  private playerOneField = 0;
  private playerTwoField = 0;

  constructor() {}

  play(die1: number, die2: number): string {
    let currentGameState = '';
    const dieSum = die1 + die2;
    this.handleMovement(dieSum);
    if (this.isGameOver) {
      currentGameState = this.gameOverString;
    } else if (this.isThereWinner()) {
      currentGameState = this.getWinString();
    } else {
      currentGameState = this.getStateString();
    }
    this.checkDoubleTurn(die1, die2);
    return currentGameState;
  }

  isThereWinner() {
    if (this.playerOneField === 100 || this.playerTwoField === 100) {
      this.isGameOver = true;
      return true;
    }
  }

  private handleMovement(dieSum: number) {
    let targetFieldIndex =
      (this.isPlayersTurn ? this.playerOneField : this.playerTwoField) + dieSum;

    if (targetFieldIndex > 100) {
      targetFieldIndex = 100 - (targetFieldIndex - 100);
    }
    const moveTo = this.board[targetFieldIndex].moveTo;
    if (moveTo) {
      targetFieldIndex = moveTo;
    }
    this.isPlayersTurn
      ? (this.playerOneField = targetFieldIndex)
      : (this.playerTwoField = targetFieldIndex);
  }

  private checkDoubleTurn(die1: number, die2: number) {
    if (die1 !== die2) {
      this.isPlayersTurn = !this.isPlayersTurn;
    }
  }

  private getWinString(): string {
    return `Player ${this.isPlayersTurn ? 1 : 2} Wins!`;
  }

  private getStateString() {
    return `Player ${this.isPlayersTurn ? 1 : 2} is on square ${
      this.board[this.isPlayersTurn ? this.playerOneField : this.playerTwoField]
        .field
    }`;
  }
}
