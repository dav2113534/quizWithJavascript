//Making this quiz run using only javascript (no jquery)

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
}]

//initial vars 
var currentQuestion = 0,
    score = 0,
    askingQuestion = true;

function askQ() {
    var choices = quiz[currentQuestion].choices,
        ChoicesHtml = "";
}

// will loop through choices and create butons
for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
        "' id='choice" + (i + 1) +
        "' value='" + choices[i] + "'>" +
        " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
}