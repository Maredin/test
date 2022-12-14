/* разукрашиваем кружки в карточках */
let bgCircle = document.querySelectorAll('.info__result-cards_circle');

let arrCircle = ['#A5A6F6', '#F178B6', '#3AC49F', '#5D5FEF', '#EF5DA8'];

bgCircle.forEach((item, i) => {
    item.style.background = arrCircle[i];
});




/* меняем цвет текста в пустых ячейках таблицы */
let zeroTable = document.querySelectorAll('td');

zeroTable.forEach(item => {
    if(item.innerHTML == 'x'){
        item.style.color = '#CDCDCD'
    }
});
