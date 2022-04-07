export class DOMutils {
    getInputValue(id) {
        const input = document.getElementById(id).value;
        return input;
    }

    getElementById(id) {
        return document.getElementById(id);
    }
    updateScoreOnDisplay(score) {
        const displayScore = this.getElementById('user_score');
        const currScore = Number(displayScore.value);
        displayScore.value = Number(currScore + score);
    }
}