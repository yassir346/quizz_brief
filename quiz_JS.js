const Questions =[
    {
        question : "question 1 : What is the capital of France? ",
        options:["A - Berlin", "B - Madrid", "C - Paris", "D - Rome"],
        correctAnswer:"asw1",
    },

    {
        question : "question 2 : Which planet is known as the Red Planet?",
        options:["A - Venus", "B - Mars", "C - Jupiter", "D - Saturn"],
        correctAnswer:"asw1",
    },

    {
        question : "question 3 : Who wrote Romeo and Juliet?",
        options:["A - Charles Dickens", "B - Mark Twain", "C - William Shakespeare", "D - Jane Austin"],
        correctAnswer:"asw1",
    },

    {
        question : "question 4 : What is the largest mammal in the world?",
        options:["A - African Elephant", "B - Blue Whale", "C - Giraffe", "D - Great White Shark"],
        correctAnswer:"asw1",
    },

    {
        question : "question 5",
        options:["A - asw1", "B - asw4", "C - asw3", "D - asw4"],
        correctAnswer:"asw1",
    },

    

]

const questionplace = document.getElementById("question");
const option1 = document.getElementById("asw1");
const option2 = document.getElementById("asw2");
const option3 = document.getElementById("asw3");
const option4 = document.getElementById("asw4");

var Resultat = 0 ;
var NbQ = 0;

function filldata(){
    questionplace.textContent = Questions[NbQ].question;
    option1.textcontent = Questions[NbQ].options[0];
    option2.textcontent = Questions[NbQ].options[1];
    option3.textcontent = Questions[NbQ].options[2];
    option4.textContent = Questions[NbQ].options[4];
}
filldata()

const next = document.getElementById("next");

next.addEventListener("click", function (e){
    if(NbQ < Questions.length){
        NbQ++;
        filldata();
    }
    else{
        next.style.display="none";
    }    
    
})

filldata 