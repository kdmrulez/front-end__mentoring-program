const EndOfGameActions = () => {
    const sequenceForIndex = {
        0: [[1, 2], [3, 6], [4, 8]],
        1: [[0, 2], [4, 7]],
        2: [[0, 1], [5, 8], [4, 6]],
        3: [[0, 6], [4, 5]],
        4: [[0, 8], [3, 5], [2, 6], [1, 7]],
        5: [[2, 8], [3, 4]],
        6: [[0, 3], [7, 8]],
        7: [[1, 4], [6, 8]],
        8: [[0, 4], [2, 5], [6, 7]]

    }

    const performActionForGameEnd = (text) => {
        document.getElementsByClassName('game-status')[0].innerText = text;
        document.onkeydown = () => window.location.reload();
    }
    return {
        checkWinning: (index, fields) => {
            let isWinner = false;
            sequenceForIndex[index].forEach(sequence => {
                let sign = fields[index];
                if (sign === fields[sequence[0]] && sign === fields[sequence[1]]) {
                    performActionForGameEnd('Player ' + sign + ' won');
                    isWinner = true;
                    return;
                }
            })
            return isWinner;
        },
        draw: () => {
            performActionForGameEnd('Draw');
        }
    }
}


export default EndOfGameActions();