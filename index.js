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


// define elements
var content = $("content"),
    questionContainer = $("question"),
    choicesContainer = $("choices"),
    scoreContainer = $("score"),
    submitBtn = $("submit");

// init vars
var currentQuestion = 0,
    score = 0,
    askingQuestion = true;

function $(id) { // shortcut for document.getElementById
    return document.getElementById(id);
}

function askQuestion() {
    var choices = quiz[currentQuestion].choices,
        choicesHtml = "";

    // loop through choices, and create radio buttons
    for (var i = 0; i < choices.length; i++) {
        choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
            "' id='choice" + (i + 1) +
            "' value='" + choices[i] + "'>" +
            " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
    }

    // load the question
    questionContainer.textContent = "Q" + (currentQuestion + 1) + ". " +
        quiz[currentQuestion].questions;

    // load the choices
    choicesContainer.innerHTML = choicesHtml;

    // setup for the first time
    if (currentQuestion === 0) {
        scoreContainer.textContent = "Score: 0 right answers out of " +
            quiz.length + " possible.";
        submitBtn.textContent = "Submit Answer";
    }
}

function checkAnswer() {
    // checks the answer and the submit button changes to next 
    if (askingQuestion) {
        submitBtn.textContent = "Next Question";
        askingQuestion = false;

        // determine which radio button they clicked
        var userpick,
            correctIndex,
            radios = document.getElementsByName("quiz" + currentQuestion);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) { // if this radio button is checked
                userpick = radios[i].value;
            }

            // get index of correct answer
            if (radios[i].value == quiz[currentQuestion].correct) {
                correctIndex = i;
            }
        }

        // This makes it visual if the choice picked is right or wrong
        var labelStyle = document.getElementsByTagName("label")[correctIndex].style;
        labelStyle.fontWeight = "bold";
        if (userpick == quiz[currentQuestion].correct) {
            score++;
            labelStyle.color = "green";
        } else {
            labelStyle.color = "red";
        }

        scoreContainer.textContent = "Score: " + score + " right answers out of " +
            quiz.length + " possible.";
    } else { // move to next question
        // setting up so user can ask a question
        askingQuestion = true;
        // change button text back to "Submit Answer"
        submitBtn.textContent = "Submit Answer";
        // if we're not on last question, increase question number
        if (currentQuestion < quiz.length - 1) {
            currentQuestion++;
            askQuestion();
        } else {
            showFinalResults();
        }
    }
}

