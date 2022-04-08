export class DOMutils {
    getInputValue(id) {
        return document.getElementById(id).value;
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