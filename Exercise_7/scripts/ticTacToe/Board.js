import Painter from './Painter.js';
const Board = () => {
    return {
        putSign: (index, sign) => Painter.drawSign(index, sign),

        highlightField: index => Painter.highlightField(index),

        changeGameStatus: text => Painter.changeGameStatus(text)
    }
}

export default Board();