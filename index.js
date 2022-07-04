//the score will add points depending on which button is clicked. 
//there will be three buttons +1 +2 +3
//once the button is clicked the score will add that number of points. 

let homeScoreEl = document.getElementById("home-score");
let score = 0;


//Home Scores
function onePoint() {
    score +=1;
    homeScoreEl.textContent = score;
};


function twoPoints() {
    score +=2;
    homeScoreEl.textContent = score;
};


function threePoints() {
    score +=3;
    homeScoreEl.textContent = score;
};


let guestScoreEl = document.getElementById("guest-score");
let scoreG = 0;

//Guest Scores

function onePointG() {
    scoreG +=1;
    guestScoreEl.textContent = scoreG;
};


function twoPointsG() {
    scoreG +=2;
    guestScoreEl.textContent = scoreG;
};


function threePointsG() {
    scoreG +=3;
    guestScoreEl.textContent = scoreG;
}