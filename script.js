const animals = {

    fruitFlies: {
        name: "Fruit Flies",
        year: "1947",
        image: "images/7-important-space-firsts-including-the-little-known-ones-1-the-first-animals-to-return-from-space-alive-1947.jpg",
        description:
            "Fruit flies were among the first animals sent beyond Earth's atmosphere. Scientists studied them to learn how radiation could affect living organisms."
    },


    laika: {
        name: "Laika",
        year: "1957",
        image: "images/VwRStV56Xdxstz5UrZDsYA.jpg",
        description:
            "Laika was a dog launched into orbit aboard Sputnik 2. Her mission helped scientists learn about the effects of space travel on living organisms."
    },


    belkaStrelka: {
        name: "Belka and Strelka",
        year: "1960",
        image: "images/images.jpg",
        description:
            "Belka and Strelka were two dogs who traveled into orbit and safely returned to Earth. Their successful mission helped prepare for future human spaceflight."
    },


    ham: {
        name: "Ham the Chimpanzee",
        year: "1961",
        image: "images/Ham_receives_his_well_deserved_apple.jpg",
        description:
            "Ham was a chimpanzee who completed simple tasks during his flight. His mission showed that living creatures could perform activities during space travel."
    },


    tortoises: {
        name: "Zond 5 Tortoises",
        year: "1968",
        image: "images/tortoise_2.jpg",
        description:
            "Two Russian tortoises traveled around the Moon aboard Zond 5. They were among the first living creatures to travel around the Moon and return safely."
    }

};

const animalButtons = document.querySelectorAll(".animal-button");

const modalBackground = document.querySelector("#modal-background");
const closeButton = document.querySelector("#close-modal");

const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalYear = document.querySelector("#modal-year");
const modalDescription = document.querySelector("#modal-description");



animalButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const animalName = button.dataset.animal;

        const selectedAnimal = animals[animalName];


        modalImage.src = selectedAnimal.image;
        modalImage.alt = selectedAnimal.name;


        modalTitle.textContent = selectedAnimal.name;

        modalYear.textContent =
            "Mission Year: " + selectedAnimal.year;


        modalDescription.textContent =
            selectedAnimal.description;


        modalBackground.classList.remove("hidden");

    });

});

closeButton.addEventListener("click", function() {

    modalBackground.classList.add("hidden");

});


modalBackground.addEventListener("click", function(event) {

    if(event.target === modalBackground) {

        modalBackground.classList.add("hidden");

    }

});


document.addEventListener("keydown", function(event) {

    if(event.key === "Escape") {

        modalBackground.classList.add("hidden");

    }

});


const quizButton = document.querySelector("#start-quiz");

const quizContent = document.querySelector("#quiz-content");



quizButton.addEventListener("click", function() {

    quizContent.classList.remove("hidden");

    quizButton.classList.add("hidden");

});


const answerButtons = document.querySelectorAll(".answer-button");

const quizResult = document.querySelector("#quiz-result");

const quizScore = document.querySelector("#quiz-score");


let correctAnswers = 0;

let answeredQuestions = 0;



let questionAnswered = [
    false,
    false,
    false
];



answerButtons.forEach(function(button, index) {


    button.addEventListener("click", function() {


        let questionNumber = Math.floor(index / 3);

       
        if(questionAnswered[questionNumber]) {

            return;

        }



        questionAnswered[questionNumber] = true;


        let start = questionNumber * 3;

        let end = start + 3;



        for(let i = start; i < end; i++) {

            answerButtons[i].disabled = true;

        }




        if(button.dataset.answer === "correct") {


            button.style.backgroundColor = "green";

            quizResult.textContent = "Correct!";

            correctAnswers++;


        } 
        
        else {


            button.style.backgroundColor = "red";

            quizResult.textContent = "Incorrect!";


        }


        answeredQuestions++;



        if(answeredQuestions === 3) {


            let percentage = 
                (correctAnswers / 3) * 100;



            quizScore.textContent =
                "Final Score: " +
                correctAnswers +
                " / 3 (" +
                percentage +
                "%)";


        }


    });


});


const sourcesButton =
    document.querySelector("#sources-button");


const sourceList =
    document.querySelector("#source-list");



sourcesButton.addEventListener("click", function() {


    sourceList.classList.toggle("hidden");



    if(sourceList.classList.contains("hidden")) {


        sourcesButton.textContent = "View Sources";


    } else {


        sourcesButton.textContent = "Hide Sources";


    }


});


const fadeSections =
    document.querySelectorAll(".fade-section");



const observer =
    new IntersectionObserver(function(entries) {


        entries.forEach(function(entry) {


            if(entry.isIntersecting) {


                entry.target.classList.add("show");


            }


        });


    }, {

        threshold: 0.2

    });



fadeSections.forEach(function(section) {


    observer.observe(section);


});
