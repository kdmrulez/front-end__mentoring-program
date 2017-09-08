import {SPACE_KEY, LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY} from './Constraints';

const KeyActions = () => {
    let selectedFieldIndex = 4;
    
    const keyMoves = {
        [SPACE_KEY]: action => action(selectedFieldIndex),

        [LEFT_KEY]: action => {
            selectedFieldIndex = selectedFieldIndex >= 1 ? --selectedFieldIndex : 8;
            action(selectedFieldIndex);
        },

        [UP_KEY]: action => {
            selectedFieldIndex = selectedFieldIndex <= 2 ? selectedFieldIndex + 6 : selectedFieldIndex - 3;
            action(selectedFieldIndex);
        },

        [RIGHT_KEY]: action => {
            selectedFieldIndex = selectedFieldIndex >= 8 ? 0 : ++selectedFieldIndex;
            action(selectedFieldIndex);
        },

        [DOWN_KEY]: action => {
            selectedFieldIndex = selectedFieldIndex >= 6 ? selectedFieldIndex - 6 : selectedFieldIndex + 3;
            action(selectedFieldIndex);
        }
    };

    return {
        setGameNavigation: actions => {
            document.onkeydown = event => {
                const keyCode = event.keyCode;
                const action = actions[keyCode];
                keyMoves[keyCode](action);
            };
        },
        setRestartGame: () => document.onkeydown = () => window.location.reload()
    }
}

export default KeyActions();
