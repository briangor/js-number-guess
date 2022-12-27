// let btn;
// btn = document.getElementById('btn-identity');
// let name = document.getElementById('name');

// let displayMessage = () => {
//     console.log(`Name is ${name.value}`);
// }

// btn.addEventListener('click', displayMessage);

// let game_input = document.getElementById('game-input');
// let game_btn = document.getElementById('game-btn');
// let game_result = document.getElementById('game-result');

// let numberGuess = () => {
//     console.log(game_input.value);

//     let result = Math.round(Math.random(0,10) * 10);
//     console.log(result);

//     game_result.innerHTML = `
//     Your value: ${game_input.value}
//     Winning number: ${result}`

//     console.log(game_result);

//     if( result == game_input.value ) {
//         alert('Congrats playa :)');
//     }
//     game_input.value = '';
// }

// game_btn.addEventListener('click', numberGuess);


// Dynammic Title
let docTitle = document.title;

window.addEventListener('blur', () => {
    document.title = "Come back";
});

window.addEventListener('focus', () => {
    document.title = "Let's have fun in JS";
});


//Searching Algos

// Variables
let search_input = document.getElementById('search-input');
let search_start = document.getElementById('search-start');
let search_btn = document.getElementById('search-btn');
let search_msg = document.getElementById('search-msg');
let search_result = document.getElementById('search-result');
let search_count = document.getElementById('search-count');
let target = null;
let step_count = 0;
let counts = [];

// Begin with a disabled Check button
search_btn.setAttribute('disabled', '');

// Generate the target
let generateTarget = () => {
    target = Math.round(Math.random(0,10) * 100);
}

// Start the search game
let startSearch = () => {
    generateTarget();
    console.log(`Target is: ${target}`);
    search_start.setAttribute('disabled', '');
    search_btn.removeAttribute('disabled');
}

search_start.addEventListener('click', startSearch);

let checkTarget = () => {
    let val = +(search_input.value);

    if(val < 0 || val > 100 ) {
        search_result.textContent = 'Your value is not within the limits!';
        return;
    } else {
        search_result.textContent = null;
    }

    step_count++;
    console.log(`Your input: ${val}`);

    //console.log(typeof(val));

    
// EXTRACT A function to do this logic and call in each if below
// fix the bug
    search_input.value = null;
    let a = `Steps: ${step_count}`
    console.log(a);
    counts.push(a);
    console.log(counts);

    search_count.innerHTML = counts;

    if (val > target ) {
        search_msg.textContent = 'Your guess is high';
    } else if ( val < target ) {
        search_msg.textContent = 'Your guess is low';
    } else {
        search_msg.textContent = 'Congratulations! You have guessed the correct number!';
        search_btn.setAttribute('disabled', '');
        search_start.removeAttribute('disabled');
        search_count.innerHTML = '';
        counts = [];
        step_count = 0;
    }
}

search_btn.addEventListener('click', checkTarget);