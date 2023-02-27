const inputField = document.getElementById('input-field');
const addBtn = document.getElementById('button-add');
const removeBtn = document.getElementById('button-remove');
const resultContainer = document.querySelector('.result-container');

const displayItem = (value) => {
    const card = document.createElement('article');
    card.classList.add('card');
    const cardText = document.createElement('span');
    cardText.classList.add('card__text');
    cardText.innerHTML = value;
    card.appendChild(cardText);
    resultContainer.appendChild(card);
}

const getItemsFromLocalStorage = () => {
    if (localStorage.length>0){
        for (let i = 0; i<localStorage.length; i++){
            displayItem(localStorage.getItem(i+1));
        }
    }
}

/* Populate the result container with previously saved items if they exist.*/
getItemsFromLocalStorage();

const saveItemToLocalStorage = (value) => {
    const key = localStorage.length+1
    localStorage.setItem(key,value)
}

addBtn.addEventListener('click', () => {
    /* Ensure that user doesn't enter empty element OR space */
    if (inputField.value.trim()){
        displayItem(inputField.value);
        saveItemToLocalStorage(inputField.value);
        inputField.value = "";
    }
})

removeBtn.addEventListener('click', () => {
    while (resultContainer.lastChild){
        resultContainer.removeChild(resultContainer.lastChild);
        localStorage.clear();
    }
})

