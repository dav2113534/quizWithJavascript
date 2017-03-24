var state = {
    //with currentQuestion key added will allow me to reference the 
    //currentQuestion within the quiz object 
    currentQuestion: 0,
    currentChoice: 0,
    score: 0,

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
        state.score++;
        return true;
    } else {
        return false;
    }
}

//This will show results from quiz
function results() {};

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
        state.choices = choice;
        console.log("im working extra hard")
    }
}


//Goes to next question 
function goNext(state) {
    var next = nextQuestion(state);
    if (next !== false) {
        state.currentQuestion = nextQuestion(state);
        render();
    } else {
        console.log("its done")
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



//respond to the user choice selection
$('#submit').click(function () {
    var choice = $('input[name=choices]:checked').val();
    var correctAnswer = checkAnswer(state, choice);
    select(choice);
    if (correctAnswer === true) {
        alert("Way to go Buddy!");
        goNext(state);
    } else {
        alert("C'mon man! Try harder!!!");
        goNext(state);

    }
})

//Will display results once results button is clicked
$('#results').click(function () {
    console.log("hi");
    var text = "You got " + state.score + " out of " + state.quiz.length + " questions right.";
    if (state.quiz[3] === state.quiz[3]) {
        alert(text);
    }
})





render();

//checkAnswer
//nextQuestion
//selected choice
//show results correct or incorrect
//handle results function and prints wrong and correct choices