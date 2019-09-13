var number = 120;
var score = 0;
var intervalId;

$("#stop").on("click", stop);

$("#resume").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#show-number").html("<h2> Time: " + number + " Seconds Left</h2>");

    if (number === 0) {

        stop();

        submit1();

    }
}

function stop() {

    clearInterval(intervalId);
}

run();



$(".form-check-input").on("click", function checker() {
    var answers = $(this).val()


    if (answers === "correct1") {
        score++;
    } else if (answers === "correct2") {
        score++;
    } else if (answers === "correct3") {
        score++;
    } else if (answers === "correct4") {
        score++;
    } else if (answers === "correct5") {
        score++;
    }

})
$("#submitBtn").on("click", function submit() {
    if (score === 5) {
        alert("CONGRATS YOU SCORED A PERFECT 5/5! YOU ARE A TRUE JEDI MASTER!")
    } else {
        alert("Your score was: " + score + "/5 !")
    }
})

function submit1() {
    if (score === 5) {
        alert("CONGRATS YOU SCORED A PERFECT 5/5! YOU ARE A TRUE JEDI MASTER!")
    } else {
        alert("Your score was: " + score + "/5 !")
    }
}