const inputField = document.getElementById('input-field');
const addBtn = document.getElementById('button-add');
const removeBtn = document.getElementById('button-remove');
const resultContainer = document.querySelector('.result-container');

addBtn.addEventListener('click', () => {
    if (inputField.value){
        const card = document.createElement('div');
        card.classList.add('card');
        const cardText = document.createElement('span');
        cardText.classList.add('card__text');
        cardText.innerHTML = inputField.value;
        card.appendChild(cardText);
        resultContainer.appendChild(card);
        inputField.value = "";
    }
})