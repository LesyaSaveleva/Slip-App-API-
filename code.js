const backColorNode = document.querySelector('.backColor-js');
const adviceTextNode = document.querySelector('.adviceText-js');
const adviseAnswerNode = document.querySelector('.adviceResponse-js');
const buttonNode = document.querySelector('.btn-js');

const ADVICE_TEXT = 'Держи совет:';


buttonNode.addEventListener('click', async() => {  //Использование асинхронной функции, чтобы использовать await
    try { // Обработка ошибок: Добавлен блок try...catch для обработки возможных ошибок при выполнении запросов.
            const response = await fetch("https://api.adviceslip.com/advice");
    
            const data = await response.json(); //Получаем данные в формате json
            console.log(data);
            const adviceTxt = data.slip.advice;
            console.log(adviceTxt);
            if (adviceTxt) {
            adviseAnswerNode.innerHTML = adviceTxt;
            adviceTextNode.innerHTML = ADVICE_TEXT;
            backColorNode.style.background = 'linear-gradient(white, rgb(14, 153, 37))'
            }
    } catch(error) {
        console.error(error);
    }
        
    }
);