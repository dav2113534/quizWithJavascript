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
        "correct": "Scott Aukerman"
    }, {
        "questions": "What was the original name of the podcast",
        "choices": ["Comedy Death Ray", "Comedy Bang Bang", "Hello from the magic Tavern", "Nerdist"],
        "correct": "Comedy Death Ray"
    }, {
        "questions": "What year did Comedy Bang Bang start?",
        "choices": ["1999", "2007", "2008", "2009"],
        "correct": "2009"
    }, {
        "questions": "What is the famous catch phrase of the show?",
        "choices": ["Whats up Hotdog", "Dog Days of Auggie Doggie", "Heynongman", "A peanut in the rain"],
        "correct": "Whats up Hotdog"
    }],
    choices: {},
    currentQuestionChoice: function () {
        return this.choices[this.currentQuestion];
    }
};

// This function will check to see if the choice selected is correct 
// created a var for correctChoice so that it is easier to follow
function checkAnswer(state, choice) {
    var correctChoice = state.quiz[0].correct;
    if (choice === correctChoice) {
        return "Correcto!!!!";
    } else {
        return "WRONG!!";
    }
}


//this function will go to the next question 
function nextQuestion(state) {
    var next = state.currentQuestion + 1;
    if (state.currentQuestion !== state.quiz.length - 1) {
        return next;
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
function render() {
    $('#questions').text(state.quiz[state.currentQuestion].questions);
    console.log(state.quiz[0].choices);
    for (var i = 0; i < state.quiz[0].choices.length; i++)
        $('#choices').append('<li type="checkboxes">' + state.quiz[0].choices[i] + '</li>');
}

//append 
//I'm trying to get this function to list the choices as checkboxes


//I want this function to display choices 
function renderChoices() {
    $('#choices').text(state.quiz[state.currentChoice].choices);
}


//goes to next question 
$('#submit').click(function () {
    var next = nextQuestion(state);
    if (next !== false) {
        state.currentQuestion = nextQuestion(state);
        render();
    } else {
        console.log("it's done");
    }
})

//goes to next set of choices
//but its not functional right now 10:20 PM 
$('#submit').click(function () {
    var nextSet = nextChoices(state);
    if (nextSet != false) {
        state.currentChoice = nextChoices(state);
        renderChoices();
    } else {
        console.log("choices next");
    }
})




renderChoices();
render();

//checkAnswer
//nextQuestion
//selected choice