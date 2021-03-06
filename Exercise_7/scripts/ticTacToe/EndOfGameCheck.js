const EndOfGameActions = () => {
    const sequenceForIndex = {
        0: [[1, 2], [3, 6], [4, 8]],
        1: [[0, 2], [4, 7]],
        2: [[0, 1], [5, 8], [4, 6]],
        3: [[0, 6], [4, 5]],
        4: [[0, 8], [3, 5], [2, 6], [1, 7]],
        5: [[2, 8], [3, 4]],
        6: [[0, 3], [7, 8], [2, 4]],
        7: [[1, 4], [6, 8]],
        8: [[0, 4], [2, 5], [6, 7]]
    };

    return {
        checkWinning: (index, fields) => {
            for (const sequence  of sequenceForIndex[index]) {
                const sign = fields[index];
                if (sign === fields[sequence[0]] && sign === fields[sequence[1]]) {
                    return true;
                }
            }
            return false;
        },
        notEmptyField: field => (field !== ''),
        checkDraw: fields => fields.every(this.notEmptyField)
    }
};

export default EndOfGameActions();