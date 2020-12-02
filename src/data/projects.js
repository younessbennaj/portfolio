//Images
import todoImage from "../../assets/projects/todo.png";
import productAppImage from "../../assets/projects/product-app.png";
import countryQuiz from "../../assets/projects/country-quiz.png";
import socialAppImage from "../../assets/projects/social-app.png";
import ticTacToeGameImage from "../../assets/projects/tic-tac-toe.png";
import cryptoAppImage from "../../assets/projects/crypto-app.png";

export const projects = [
    {
        "title": "Todo App",
        "tags": [
            "react",
            "responsive",
            "HTML",
            "CSS",
            "javascript"
        ],
        "image": todoImage,
        "description": "L’application est une “todo list”. Un todo est composé d’un id, d’un titre (title), d’un corps de message (body), d’une date de création, d’une date de modification et d’une date de traitement.",
        "links": {
            "github": "https://github.com/younessbennaj/todo-project",
            "live": ""
        }
    },
    {
        "title": "Product App",
        "tags": [
            "node",
            "express",
            "react",
            "HTML",
            "CSS",
            "javascript"
        ],
        "image": productAppImage,
        "description": "Une API REST en Node.js/Express lié à une base de donnée MongoDB. Une application Web en ReactJS qui permettra de consulter ces produits, les modifier, en supprimer ou en créer de nouveaux.",
        "links": {
            "github": "https://github.com/younessbennaj/product-app",
            "live": ""
        }
    },
    {
        "title": "Crypto App",
        "tags": [
            "react",
            "javascript",
            "authentication",
            "node",
            "express"
        ],
        "image": cryptoAppImage,
        "description": "Project dans le cadre de ma formation. Réalisation en équipe d'une application qui permet à un utilisateur de visualiser le cours des crypto-monnaies et les dernières news sur le sujet en fonction de ses préférences  ",
        "links": {
            "github": "https://github.com/younessbennaj/the-count-of-money",
            "live": ""
        }
    },
    {
        "title": "Country Quiz",
        "tags": [
            "react",
            "HTML",
            "CSS",
            "javascript"
        ],
        "image": countryQuiz,
        "description": "Une application réalisée avec React JS qui permet de tester l'utilisateur sur sa connaissance des capitales du monde. L'application utilise une API qui permet de récupérer les données du questionnaire.",
        "links": {
            "github": "https://github.com/younessbennaj/country-quiz",
            "live": "https://affectionate-bell-b6f3ec.netlify.app/"
        }
    },
    {
        "title": "Social App",
        "tags": [
            "react",
            "node",
            "express",
            "authentication",
            "firestore",
            "firebase"
        ],
        "image": socialAppImage,
        "description": "Une application type  réseau social réalisée avec Node/Firebase pour le back end et React JS pour le client. L'utilisateur peut s'enregistrer, s'indentifier et ajouter des posts sur l'application",
        "links": {
            "github": "https://github.com/younessbennaj/react-social-app",
            "live": "https://social-app-younessbennaj.herokuapp.com/"
        },

    },
    {
        "title": "Tic Tac Toe Game",
        "tags": [
            "HMTL",
            "CSS",
            "JavaScript",
            "ES6"
        ],
        "image": ticTacToeGameImage,
        "description": "Petit jeu du Morpion réalisé avec HTML CSS et JavaScript. Ce jeu permet à deux joueurs de s'affronter sur le même navigateur. Utilisation de l'élément Canvas et des classes ES6.",
        "links": {
            "github": "https://github.com/younessbennaj/tic-toe-game",
            "live": ""
        },
    }
]