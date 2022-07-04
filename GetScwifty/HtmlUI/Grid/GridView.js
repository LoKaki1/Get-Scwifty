export class GridView {
    constructor () {

    }

    BuildGrid (cells) {
        let container = document.getElementById('container')
        for (let cellRow of cells) {
            for (let cell of cellRow) {
                let htmlCell = document.createElement('div')
                console.log(cellRow[cell])
                htmlCell.innerText = cell.value
                htmlCell.className ='cell-item'
                container.appendChild(htmlCell)
            }
        }
    }
}