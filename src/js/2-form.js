

const formData = {
    email: '',
    message: '',
};

const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');
const formEl = document.querySelector('.feedback-form');

function onInputChange(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return false;
    }
    return true;
};

inputEl.addEventListener('input', onInputChange);
textareaEl.addEventListener('input', onInputChange);
formEl.addEventListener('submit', onFormSubmit);

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);   
    formData.email = parsedFormData.email || '';
    formData.message = parsedFormData.message || '';
    inputEl.value = formData.email;
    textareaEl.value = formData.message;
    
};



  