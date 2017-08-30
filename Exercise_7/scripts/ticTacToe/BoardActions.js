import EndOfGameActions from './EndOfGameActions.js';
const BoardActions = () => {
    let fields = ['', '', '', '', '', '', '', '', '']
    const leastNumberOfMovesToWin = 5;
    const maxNumberOfMovesAllowed = fields.length;
    let currentPlayerSign = 'X';
    let lastSelectedField = 4;
    let numberOfMoves = 0;
    let isGameFinished = false;
    const changeCurrentPlayer = () => {
        currentPlayerSign = currentPlayerSign === 'X' ? 'O' : 'X';
        document.getElementsByClassName('game-status')[0].innerText = `Player ${currentPlayerSign} moves`;
    }


    const clearPreviouslyHighlightedField = () => {
        document.getElementsByClassName('field')[lastSelectedField].style.backgroundColor = 'transparent';
    }

    const drawingSignDelay = () => {
        return new Promise(resolve => setTimeout(resolve, 300));
    }
    return {
        putSign: (index) => {
            drawingSignDelay().then(
                () => {
                    if (!fields[index] && !isGameFinished) {
                        document.getElementsByClassName('field')[index].innerText = `${currentPlayerSign}`;
                        fields[index] = currentPlayerSign;
                        numberOfMoves++;

                        if (numberOfMoves >= leastNumberOfMovesToWin)
                            isGameFinished = EndOfGameActions.checkWinning(index, fields);


                        if (!isGameFinished && numberOfMoves === maxNumberOfMovesAllowed) {
                            EndOfGameActions.draw();
                            isGameFinished = true;
                        }

                        if (!isGameFinished) changeCurrentPlayer();
                    }
                }
            );

        },
        highlightSelectedField: (index) => {
            clearPreviouslyHighlightedField();
            lastSelectedField = index;
            document.getElementsByClassName('field')[index].style.backgroundColor = 'lightgray';
        }
    }
}


export default BoardActions();