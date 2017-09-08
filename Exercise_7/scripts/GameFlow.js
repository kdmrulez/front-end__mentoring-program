import KeyActions from './ticTacToe/KeyActions';
import Board from './ticTacToe/Board';
import EndOfGameCheck from './ticTacToe/EndOfGameCheck';
import {SPACE_KEY, LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY} from './ticTacToe/Constraints';

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
        if (!fields[fieldIndex]) {
            putSignDelay(DEFAULT_DELAY).then(() => {
                Board.putSign(fieldIndex, currentSign);
                fields[fieldIndex] = currentSign;


                if (EndOfGameCheck.checkWinning(fieldIndex, fields)) {
                    endGameActions(`Player ${currentSign} won`);
                    return;
                }

                if (EndOfGameCheck.draw(fields)) {
                    endGameActions('Draw');
                    return;
                }
                changePlayer();
            })
        }
    };

    KeyActions.setGameNavigation({
        [SPACE_KEY]: putSign,
        [LEFT_KEY]: highlightField,
        [UP_KEY]: highlightField,
        [RIGHT_KEY]: highlightField,
        [DOWN_KEY]: highlightField
    });
})();

