//Making this quiz run using only javascript (no jquery)
// creating array of objects will make it easier instead of creating each individual vars 


var state = {
    //with currentQuestion key added will allow me to reference the 
    //currentQuestion within the quiz object 
    currentQuestion: 0,
    currentChoice: 0,
    quiz: [{
        "questions": "Who is the host of Comedy Bang Bang?",
        "choices": ["Jason Mantzoukas", "Paul F. thompkins", "Nick Kroll", "Scott Aukerman"],
        "correct": "3"
    }, {
        "questions": "What was the original name of the podcast",
        "choices": ["Comedy Death Ray", "Comedy Bang Bang", "Hello from the magic Tavern", "Nerdist"],
        "correct": "0"
    }, {
        "questions": "What year did Comedy Bang Bang start?",
        "choices": ["1999", "2007", "2008", "2009"],
        "correct": "3"
    }, {
        "questions": "What is the famous catch phrase of the show?",
        "choices": ["Whats up Hotdog", "Dog Days of Auggie Doggie", "Heynongman", "A peanut in the rain"],
        "correct": "0"
    }],
    score: 0,
    choices: {},
    currentQuestionChoice: function () {
        return this.choices[this.currentQuestion];
    }
};

// This function will check to see if the choice selected is correct 
// created a var for correctChoice so that it is easier to follow
function checkAnswer(state, choice) {
    var correctChoice = state.quiz[state.currentQuestion].correct;
    if (choice === correctChoice) {
        return true;
    } else {
        return false;
    }
}

//I want this to add up the correct + wrong choices 
function totalScore(state, score) {
    var dave = state.currentQuestion;
    var total = state.score++;
    if (dave === correct) {
        return total;
    } else {
        return "Wrong!"
    }
}

//this function will go to the next question 
function nextQuestion(state) {
    var next = state.currentQuestion + 1;
    if (state.currentQuestion !== state.quiz.length - 1) {
        return next;
        if (state.quiz.questions[state.currentQuestion] == state.quiz.correct);
    } else {
        return false;
    }
}

//This function goes to next set of choices 
function nextChoices(state) {
    var nextSet = state.currentChoice + 1;
    if (state.currentChoice !== state.quiz.length - 1) {
        return nextSet;
    } else {
        return false;
    }
}
//this function saves a users selected choice into the choice array
function select(choice) {
    var choiceAlreadySelected = state.currentQuestionChoice() !== undefined;
    if (choiceAlreadySelected) {
        //Does nothing if the choice is already selected
        return false;
    } else {
        //saves choice
        state.choices[state.currentQuestion] = choice;
    }
}

//displays questions
//also lists the choices 
function render() {
    var david = state.quiz[state.currentQuestion];
    $('#questions').text(david.questions);
    renderChoices(david.choices);
}


//adds radio buttons to each choice 
function renderChoice(choice, index) {
    return (
        '<li>' +
        '<input type="radio" name="choices" value="' + index + '" required>' +
        '<label>' + choice + '</label>' +
        '</li>'
    )
}



//I want this function to display choices 
function renderChoices(choices) {
    var string = choices.map(renderChoice).join("");
    $('#choices').html(string);
}


//goes to next question 
$('#submit').click(function () {
    var choice = $('input[name=choices]:checked').val();
    var correctAnswer = checkAnswer(state, choice);
    if (correctAnswer === true) {
        alert("Way to go Buddy!");
        goNext(state);
    }
})


//respond to the user choice selection

function goNext(state) {
    var next = nextQuestion(state);
    if (next !== false) {
        state.currentQuestion = nextQuestion(state);
        render();
    } else {
        console.log("it's done");
    }
}


render();

//checkAnswer
//nextQuestion
//selected choice
//show results correct or incorrect


// Users start on a screen where they can click a button to start the quiz.
// Once the game is started, the user should be prompted through a series of at least 5 multiple choice questions which they can answer. Questions are to be asked one after another, and the user should only be able to view one question at a time.
// Users should not be able to skip questions.
// When viewing an individual question, the user should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
// When a user submits an answer to a question, they should first get feedback on if their answer was correct or not. If it's incorrect, they should be shown the correct answer. Then they should be moved along to the next question.
// After the user has completed the final question, they should be shown their overall score (in other words, how many questions they got right out of the total questions asked) and be able to start a new game.