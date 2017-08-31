import KeyActions from './ticTacToe/KeyActions';
import Board from './ticTacToe/Board'
import EndOfGameCheck from './ticTacToe/EndOfGameCheck'

(() => {
    const DEFAULT_DELAY = 300;
    let currentSign = 'X';
    const fields = ['', '', '', '', '', '', '', '', ''];

    const highlightField = (fieldIndex) => {
        Board.highlightField(fieldIndex);
    };

    const putSignDelay = delay => new Promise(resolve => setTimeout(resolve, delay));

    const changePlayer = () => {
        currentSign = currentSign === 'X' ? '0' : 'X'
        Board.changeGameStatus(`Player ${currentSign} turn`);
    };

    const endGameActions = (text) => {
        Board.changeGameStatus(text);
        KeyActions.setRestartGame();
    };

    const putSign = (fieldIndex) => {
        putSignDelay(DEFAULT_DELAY).then(() => {
            if (!fields[fieldIndex]) {
                Board.putSign(fieldIndex, currentSign);
                fields[fieldIndex] = currentSign;
            }

            if (EndOfGameCheck.checkWinning(fieldIndex, fields)) {
                endGameActions(`Player ${currentSign} won`);
                return;
            }

            if (EndOfGameCheck.draw(fields)) {
                endGameActions('Draw');
                return;
            }
            changePlayer()
        })
    };

    KeyActions.setGameNavigation({
        32: putSign,
        37: highlightField,
        38: highlightField,
        39: highlightField,
        40: highlightField
    });
})();

