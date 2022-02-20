function playGame() {

    let low = 1;
    let high = 10;
    let answer = getRandomInt(low, high);
    let life = 3;
    console.log(answer);

    let i = 0, loos = false;
    while (i != 3) {
        let user_answer = prompt("Guess a number in between 1-10");
        if (user_answer == answer) {
            window.alert("You win!");
            loos = false;
            break;
        }
        else{
            if(user_answer > answer){window.alert("Hints: Correct answer is smaller!")}
            else{window.alert("Hints: Correct answer is greater!");}
        }
        console.log(user_answer);
        i += 1
    }
    if(!loos){
        window.alert("You Loos!");
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}