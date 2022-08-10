function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeBtn: document.querySelector('button.change-color'),
  body: document.querySelector('body'),
  colorValue: document.querySelector('span.color')
}

refs.changeBtn.addEventListener('click', e => {
  let color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
})