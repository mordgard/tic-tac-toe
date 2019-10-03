class TicTacToe {
  constructor() {
    this.field = [[null, null, null], [null, null, null], [null, null, null]];
    this.currentPlayerSymbol = "x";
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (
      this.field[rowIndex][columnIndex] === null &&
      this.currentPlayerSymbol === "x"
    ) {
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol = "o";
    } else if (
      this.field[rowIndex][columnIndex] === null &&
      this.currentPlayerSymbol === "o"
    ) {
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol = "x";
    }
  }

  isFinished() {
    if (this.getWinner() || this.isDraw()) {
      return true;
    }

    return false;
  }

  getWinner() {
    const x = "x";
    const o = "o";
    const field = this.field;

    if (
      (field[0][0] === x && field[0][1] === x && field[0][2] === x) ||
      (field[1][0] === x && field[1][1] === x && field[1][2] === x) ||
      (field[2][0] === x && field[2][1] === x && field[2][2] === x) ||
      (field[0][0] === x && field[1][0] === x && field[2][0] === x) ||
      (field[0][1] === x && field[1][1] === x && field[2][1] === x) ||
      (field[0][2] === x && field[1][2] === x && field[2][2] === x) ||
      (field[0][0] === x && field[1][1] === x && field[2][2] === x) ||
      (field[0][2] === x && field[1][1] === x && field[2][0] === x)
    ) {
      return x;
    } else if (
      (field[0][0] === o && field[0][1] === o && field[0][2] === o) ||
      (field[1][0] === o && field[1][1] === o && field[1][2] === o) ||
      (field[2][0] === o && field[2][1] === o && field[2][2] === o) ||
      (field[0][0] === o && field[1][0] === o && field[2][0] === o) ||
      (field[0][1] === o && field[1][1] === o && field[2][1] === o) ||
      (field[0][2] === o && field[1][2] === o && field[2][2] === o) ||
      (field[0][0] === o && field[1][1] === o && field[2][2] === o) ||
      (field[0][2] === o && field[1][1] === o && field[2][0] === o)
    ) {
      return o;
    } else {
      return null;
    }
  }

  noMoreTurns() {
    let boolean = true;
    this.field.forEach(item =>
      item.forEach(item => {
        if (item === null) boolean = false;
      })
    );
    return boolean;
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) {
      return true;
    }

    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
