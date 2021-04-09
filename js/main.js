let result = 0;

let bingoStr = 'Це правильна відповідь!\n';
let trueStr = 'Насправді твердження правильне!\n';
let falseStr = 'Ні!\n';

let data = [
        'Для додавання коду JavaScript на сторінку використовується тег <script>', 
            {question: 'Яка функція показує повідомлення і запитує введення тексту від користувача.',
                answer: 'prompt'},
                    {question: 'do..while - перевіряє умову перед кожною ітерацією',
                        answer: 'while - перевіряє умову перед кожною ітерацією'},
                    {question: 'Скільки основних типів даних містить мова JavaScript', answer: '8',
                description: 'JavaScript містить 8 основних типів даних: '+ 
            'number, bigint, string, boolean, null, undefined, object, symbol'},
        'Конструктори слід викликати за допомогою оператора new. Такий виклик створює порожній this ' + 
    'на початку виконання і повертає заповнений в кінці.'
];

function success(positive) {
    alert(positive);
    result++;
}
function confirmFunc(action, question, positive, negative) {
    if(action) {
        confirm(question) ? success(positive) : alert(negative);   
    }
    else {
        !confirm(question) ? success(positive) : alert(negative);
    }      
} 
function promptFunc(question, answer, positive, negative) {  
    prompt(question, '') == answer ? success(positive) : alert(negative);      
} 

const name = prompt("Your name:", "");

alert(`Привіт ${name}! Потрібно дати відповідь всього на ${data.length} запитань :)
    PS. Порожні поля рахуються неправильними`
);

confirmFunc(true, data[0], bingoStr, trueStr + data[0]);
promptFunc(data[1]?.question, data[1]?.answer, bingoStr, falseStr + data[1]?.answer);
confirmFunc(false, data[2]?.question, bingoStr + data[2]?.answer, falseStr + data[2]?.answer);
promptFunc(data[3]?.question, data[3]?.answer, bingoStr + data[3]?.description, falseStr + data[3]?.description);
confirmFunc(true, data[4], bingoStr, trueStr + data[4]);

let resultPercent = (result * 100) / data.length;

switch (true) {
    case resultPercent == 0:
        alert('Жодної правильної відповіді :(');
        break;
    case resultPercent >= 20 && resultPercent <= 60:
        alert(`Підготуйтесь краще, ${name}! Ваших знань недостатньо, спробуйте пізніше . . .`);
        break;
    case resultPercent == 80:
        alert(`Хороша підготовка, ${name}!`);
        break;
    case resultPercent == 100:
        alert(`Відмінно, ${name}!`);
        break;
}

alert(`Результати\nПравильних відповідей - ${+result} (${+resultPercent}%)`);