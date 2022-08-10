const refs = {
    input: document.querySelector('#validation-input'),
}
refs.input.addEventListener('blur', onInputBlur);
refs.input.addEventListener('change', onInputChange);

function onInputBlur() {
    console.log('lost focus');
}
function onInputChange(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length <= 6) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.remove('valid');
    refs.input.classList.add('invalid');
  }
    }

