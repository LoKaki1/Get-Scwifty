export class Starter {
          
    AddEventToStartButton(event) {
        let button = document.getElementById('start-game')
        button.addEventListener('click', event)
    }
}