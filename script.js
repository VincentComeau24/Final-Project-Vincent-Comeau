
const animals = {
    fruitFlies: {
        name: "Fruit Flies",
        year: "1947",
        description:
            "Fruit flies were among the first animals sent beyond Earth's atmosphere. Scientists studied them to learn how radiation could affect living organisms."
    },

    laika: {
        name: "Laika",
        year: "1957",
        description:
            "Laika was a dog launched into orbit aboard Sputnik 2."
    },

    belkaStrelka: {
        name: "Belka and Strelka",
        year: "1960",
        description:
            "Belka and Strelka were two dogs who traveled into orbit and safely returned to Earth."
    },

    ham: {
        name: "Ham the Chimpanzee",
        year: "1961",
        description:
            "Ham completed simple tasks during his flight."
    },

    tortoises: {
        name: "Zond 5 Tortoises",
        year: "1968",
        description:
            "Two Russian tortoises traveled around the Moon aboard Zond 5."
    }
};

const animalButtons = document.querySelectorAll(".animal-button");

const modalBackground = document.querySelector("#modal-background");
const closeButton = document.querySelector("#close-modal");

const modalTitle = document.querySelector("#modal-title");
const modalYear = document.querySelector("#modal-year");
const modalDescription = document.querySelector("#modal-description");


animalButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const animalName = button.dataset.animal;
        const selectedAnimal = animals[animalName];

        modalTitle.textContent = selectedAnimal.name;
        modalYear.textContent =
            "Mission Year: " + selectedAnimal.year;

        modalDescription.textContent =
            selectedAnimal.description;

        modalBackground.classList.remove("hidden");
    });

});

closeButton.addEventListener("click", function () {
    modalBackground.classList.add("hidden");
});


const quizButton = document.querySelector("#start-quiz");
const quizContent = document.querySelector("#quiz-content");

quizButton.addEventListener("click", function () {

    quizContent.classList.toggle("hidden");

});

const answerButtons = document.querySelectorAll(".answer-button");
const quizResult = document.querySelector("#quiz-result");

answerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const answer = button.dataset.answer;

        if (answer === "correct") {
            quizResult.textContent = "Correct!";
        } else {
            quizResult.textContent = "That answer is not correct. Try again.";
        }

    });

});


const sourcesButton =
    document.querySelector("#sources-button");

const sourceList =
    document.querySelector("#source-list");

sourcesButton.addEventListener("click", function () {

    sourceList.classList.toggle("hidden");

    if (sourceList.classList.contains("hidden")) {
        sourcesButton.textContent = "View Planned Sources";
    } else {
        sourcesButton.textContent = "Hide Planned Sources";
    }

});
