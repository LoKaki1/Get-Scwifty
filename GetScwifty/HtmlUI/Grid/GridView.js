class GridView {
    constructor () {

    }

    BuildGrid (cells) {
        let container = document.getElementById('container')
        for (let cellRow in cells) {
            for (let cell in cellRow) {
                let htmlCell = document.createElement('div')
                htmlCell.innerText = cell.value
                container.appendChild(htmlCell).className('cell-item')
            }
        }
    }
}