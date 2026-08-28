import {Question} from "@/types/quiz";

export const questions: Question[] = [
    {
        id: 1,
        question: "Who won the 2022 FIFA World Cup?",
        options: [
            "France",
            "Argentina",
            "Brazil",
            "Germany",
        ],
        correctAnswer: "Argentina",
    },
    {
        id: 2,
        question: "Which club is known as Los Blancos?",
        options: [
            "Barcelona",
            "Liverpool",
            "Real Madrid",
            "Bayern Munich",
        ],
        correctAnswer: "Real Madrid",
    },
    {
        id: 3,
        question: "Who has won the most Ballon d'Or awards?",
        options: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Neymar",
            "Zinedine Zidane",
        ],
        correctAnswer: "Lionel Messi",
    },
    {
        id: 4,
        question: "Which country won the 2018 FIFA World Cup?",
        options: [
            "Croatia",
            "France",
            "Germany",
            "Spain",
        ],
        correctAnswer: "France",
    },
    {
        id: 5,
        question: "Which club plays at Anfield?",
        options: [
            "Manchester United",
            "Chelsea",
            "Liverpool",
            "Arsenal",
        ],
        correctAnswer: "Liverpool",
    },
];