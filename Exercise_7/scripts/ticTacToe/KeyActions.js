const KeyActions = () => {
    let selectedFieldIndex = 4;
    const keyMoves = {
        /*SPACE KEY*/
        32: action => action(selectedFieldIndex),

        /*LEFT KEY*/
        37: action => {
            selectedFieldIndex = selectedFieldIndex >= 1 ? --selectedFieldIndex : 8;
            action(selectedFieldIndex);
        },

        /*UP KEY*/
        38: action => {
            selectedFieldIndex = selectedFieldIndex <= 2 ? selectedFieldIndex + 6 : selectedFieldIndex - 3;
            action(selectedFieldIndex);
        },
        /*RIGHT KEY*/
        39: action => {
            selectedFieldIndex = selectedFieldIndex >= 8 ? 0 : ++selectedFieldIndex;
            action(selectedFieldIndex);
        },
        /*DOWN KEY*/
        40: action => {
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
