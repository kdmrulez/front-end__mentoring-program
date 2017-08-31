const Painter = () => {
    const boardFieldClass = 'board__field';
    const boardFieldHighlightedClass = 'board__field_highlighted'
    return {
        drawSign: (index, sign) => document.getElementsByClassName(boardFieldClass)[index].innerText = sign,

        highlightField: index => {
            document.getElementsByClassName(boardFieldHighlightedClass)[0].classList.remove(boardFieldHighlightedClass);
            document.getElementsByClassName(boardFieldClass)[index].className += " " + boardFieldHighlightedClass;
        },

        changeGameStatus: text => document.getElementsByClassName('game-status')[0].innerText = text

    }
}

export default Painter();