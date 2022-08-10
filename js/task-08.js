const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    
    const mail = formElements.email;
    const password = formElements.password;

    if (mail === '' || password=== '') {
        return alert('Must be filled')
    }
    const userEl = {
        email: mail.value, password: password.value
    }
    console.log(userEl)
        
    event.currentTarget.reset()
}
