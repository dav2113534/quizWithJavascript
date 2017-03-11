//Making this quiz run using only javascript (no jquery)
// creating array of objects will make it easier instead of creating each individual vars 


var quiz = [{
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
}];

var currentQuestion = 0


function checkAnswer(choice, correct) {
    // for (var i = 0; i < quiz[0].length; i++); 
    if (quiz[0].choices === quiz[0].correct) {
        return true;
    } else {
        return false;
    }
    if (quiz[1].choices === quiz[1].correct) {
        return true;
    } else {
        return false;
    }
    if (quiz[2].choices === quiz[2].correct) {
        return true;
    } else {
        return false;
    }
    if (quiz[3].choices === quiz[3].correct) {
        return true;
    } else {
        return false;
    }
}

function nextQuestion(next, currentQuestion) {
    var next = quiz.questions;
    if (next === quiz.correct) {
        return quiz.questions;
    } else {
        return false;
    }
}



function showResults(correct, wrong) {
    var wrong = "Wrong";
}


// checkAnswer
// nextQuestion
// showResults