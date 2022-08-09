let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const addBtn = document.querySelector('#counter').lastElementChild;
const subBtn = document.querySelector('#counter').firstElementChild;

addBtn.addEventListener('click', event => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

subBtn.addEventListener('click', event => {
  valueEl -= 1;

  counterValue.innerText = valueEl;

});