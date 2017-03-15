//Making this quiz run using only javascript (no jquery)
// creating array of objects will make it easier instead of creating each individual vars 


var state = {
    //with currentQuestion key added will allow me to reference the 
    //currentQuestion within the quiz object 
    currentQuestion: 0,
    questions: [{
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
    var correctChoice = state.questions[0].correct;
    if (choice === correctChoice) {
        return "Correcto!!!!";
    } else {
        return "WRONG!!";
    }
}

function nextQuestion(state, next) {
    var next = state.questions[0].questions++;
    if (currentQuestion === checkAnswer) {
        return go;
    } else {
        return nothing;
    }
}

//this function will go to the next question 
function nextQuestion(state, next) {
    var next = state.questions[0].questions++;
    var currentQuestionNext = state.currentQuestion++;
    if (currentQuestion === checkAnswer) {
        return go;
    } else {
        return nothing;
    }
}

// checkAnswer
// nextQuestion