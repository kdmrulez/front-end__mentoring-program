import BoardActions from './BoardActions.js'

const keyActions = () => {
    let selectedFieldIndex = 4;

    const keyMoves = {
        /*SPACE KEY*/
        32: () => {
            BoardActions.putSign(selectedFieldIndex);
        },
        /*LEFT KEY*/
        37: () => {
            selectedFieldIndex = selectedFieldIndex >= 1 ? --selectedFieldIndex : 8;
            BoardActions.highlightSelectedField(selectedFieldIndex);
        },
        /*UP KEY*/
        38: () => {
            selectedFieldIndex = selectedFieldIndex <= 2 ? selectedFieldIndex + 6 : selectedFieldIndex - 3;
            BoardActions.highlightSelectedField(selectedFieldIndex);
        },
        /*RIGHT KEY*/
        39: () => {
            selectedFieldIndex = selectedFieldIndex >= 8 ? 0 : ++selectedFieldIndex;
            BoardActions.highlightSelectedField(selectedFieldIndex);
        },
        /*DOWN KEY*/
        40: () => {
            selectedFieldIndex = selectedFieldIndex >= 6 ? selectedFieldIndex - 6 : selectedFieldIndex + 3;
            BoardActions.highlightSelectedField(selectedFieldIndex);
        }
    }
    BoardActions.highlightSelectedField(selectedFieldIndex);
    return (event) => {
        keyMoves[event.keyCode]();
    };
}

export default keyActions();
