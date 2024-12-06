answerContainer = document.querySelector(".question-container");
questionContainer = document.querySelector(".questionText");

function questionTableJSON(json_data, index) {
    const questionsAndAnswers = {};
    const data = JSON.parse(json_data);

    data.questions.forEach((item) => {
        const questionOrder = item.question_order;
        const question = item.question;
        const answer = item.answer;
        const explainTrue = item.explain_true;
        const explainFalse = item.explain_false;

        questionsAndAnswers[questionOrder] = {
            question_order: questionOrder,
            question: question,
            answer: answer,
            explain_true: explainTrue,
            explain_false: explainFalse
        }
    });        

    if (questionContainer) {
            newElement = document.createElement("h2");
            newElement.innerText = questionsAndAnswers[index].question;            
            questionContainer.appendChild(newElement);

            for (let i = 0; i < questionsAndAnswers[index].answer.length; i++) {
                newElement = document.createElement("a");
                newElement.classList.add("answer-box");
                newElement.innerText = questionsAndAnswers[index].answer[i];
                answerContainer.appendChild(newElement);
            }
    }

}

const json_data = `
{
    "questions": [
        {
            "question_order": 1,
            "question": "Les coraux ont un rôle essentiel dans la purification et la filtration des océans, à quel organe du corps humain peuvent-ils être comparés ?",
            "answer": [
                "Les reins",
                "Les poumons",
                "Le cœur",
                "Le cerveau"
            ],
            "explain_true": "Bonne réponse ! Les coraux peuvent être comparés aux reins, car ils filtrent et purifient leur environnement. Tout comme les reins éliminent les toxines du sang pour maintenir l'équilibre dans le corps, les coraux filtrent l'eau en absorbant les particules, nutriments et polluants, contribuant ainsi à la santé des écosystèmes marins.",
            "explain_false": "Mauvaise réponse ! La bonne réponse est les reins. Les coraux jouent un rôle similaire à celui des reins dans le corps humain : ils filtrent et purifient leur environnement. En éliminant les particules, nutriments et polluants de l’eau, les coraux assurent un équilibre vital pour les écosystèmes marins, tout comme les reins maintiennent l'équilibre interne du corps en filtrant le sang."
        },
        {
            "question_order": 2,
            "question": "Le corps humain dispose de plusieurs mécaniques de défenses face aux agressions extérieures comme les blessures (sécrétion lymphe pour cicatriser) , les infections (mobilisation des globules blancs et des anticorps) et les maladies (activation du système immunitaire). Tout comme le corps humain, pensez-vous que les océans peuvent faire preuve de mécaniques de défenses face aux tempêtes, ou à l'érosion ?",
            "answer": [
                "Oui",
                "Non"
            ],
            "explain_true": "Bonne réponse ! Tout comme le corps humain dispose de mécanismes de défense, les océans peuvent également réagir aux agressions extérieures. Par exemple, les récifs coralliens agissent comme des barrières naturelles, absorbant l'énergie des vagues pour protéger les côtes contre l'érosion et les tempêtes. Les mangroves et les herbiers marins contribuent aussi à stabiliser les sols et à limiter les impacts des perturbations climatiques. Ces mécanismes aident les océans à maintenir leur équilibre face aux agressions.",
            "explain_false": "Mauvaise réponse ! Les océans, comme le corps humain, disposent de mécanismes naturels pour se protéger et s’adapter. Les récifs coralliens, les mangroves et les herbiers marins jouent un rôle clé en absorbant l'énergie des vagues, en stabilisant les sols et en limitant l'érosion. Ces systèmes permettent aux océans de faire face aux agressions extérieures, comme les tempêtes ou l'érosion."
        },
        {
            "question_order": 3,
            "question": "Qu’elle serait la conséquence de l’arrêt de la circulation ?",
            "answer": [
                "Aucune conséquence la vie continue",
                "Conséquence dramatique à terme la vie s’arrête"
            ],
            "explain_true": "Le système circulatoire et les courants océanique sont similaire car tous 2 sont des flux continu en sens unique composé d’un flux transportant les éléments nécessaire à la vie et d’un second transportant les rejet de cette dernière. L’un comme l’autre si il s’arrête la vie n’est plus possible.",
            "explain_false": "Le système circulatoire et les courants océanique sont similaire car tous 2 sont des flux continu en sens unique composé d’un flux transportant les éléments nécessaire à la vie et d’un second transportant les rejet de cette dernière. L’un comme l’autre si il s’arrête la vie n’est plus possible."
        },
        {
            "question_order": 4,
            "question": "Le sommeil comme les marées sont des cycles qui rythme leur corps mais si il s’arrête on risque de voir des dégâts lesquels ?",
            "answer": [
                "Des dégâts irréversibles",
                "Une détérioration légère des écosystèmes",
                "Si le cycle repart on verras que peu de dégâts"
            ],
            "explain_true": "Dans les deux cas, ces cycles sont essentiels pour maintenir l'équilibre, la stabilité et la vie si ces cycles ne sont pas respecté il y a des risques de dégradations dans la symbiose des systèmes ",
            "explain_false": "Dans les deux cas, ces cycles sont essentiels pour maintenir l'équilibre, la stabilité et la vie si ces cycles ne sont pas respecté il y a des risques de dégradations dans la symbiose des systèmes "
        },
        {
            "question_order": 5,
            "question": "Que se passerait-il si les éléments qui permettent l’autorégulation venaient à cesser leur fonctions ?",
            "answer": [
                "Les systèmes ne seraient pas impactés",
                "La vie ne serait plus possible"
            ],
            "explain_true": "L’océan, aussi bien que le corps humain, sont composés d’une multitude d’éléments qui leur permettent de s’autoréguler, c’est-à-dire de pouvoir régler les potentiels problèmes d’eux-mêmes. Ainsi leur survie est dûe au travail minutieux de chacun de ces éléments.",
            "explain_false": "L’océan, aussi bien que le corps humain, sont composés d’une multitude d’éléments qui leur permettent de s’autoréguler, c’est-à-dire de pouvoir régler les potentiels problèmes d’eux-mêmes. Ainsi leur survie est dûe au travail minutieux de chacun de ces éléments."
        },
        {
            "question_order": 6,
            "question": "Que se passerait-il si les interconnexions dans le corps humain, comme dans l'océan venaient à disparaître ?",
            "answer": [
                "Tout l'écosystème pourrait disparaître.",
                "Chaque membre de l'écosystème s’auto gère et est indépendant",
                "L'écosystème se verrait affaibli mais finirait par retrouver son état original"
            ],
            "explain_true": "Le corps humain ainsi que les océans sont des écosystèmes constitués d’une grande variété de sous-éléments qui leur permettent de survivre. Ainsi, de la même façon que les poumons chez l’Homme ont pour rôle d’oxygéner le sang, les phytoplanctons produisent du dioxygène grâce à la photosynthèse, élément indispensable à la vie.",
            "explain_false": "Le corps humain ainsi que les océans sont des écosystèmes constitués d’une grande variété de sous-éléments qui leur permettent de survivre. Ainsi, de la même façon que les poumons chez l’Homme ont pour rôle d’oxygéner le sang, les phytoplanctons produisent du dioxygène grâce à la photosynthèse, élément indispensable à la vie."
        },
        {
            "question_order": 7,
            "question": "",
            "answer": [

            ],
            "explain_true": "",
            "explain_false": ""
        },
        {
            "question_order": 8,
            "question": "",
            "answer": [

            ],
            "explain_true": "",
            "explain_false": ""
        },
        {
            "question_order": 9,
            "question": "",
            "answer": [

            ],
            "explain_true": "",
            "explain_false": ""
        }
    ]
}
`;

questionTableJSON(json_data, 1);