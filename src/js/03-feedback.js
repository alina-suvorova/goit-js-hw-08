import throttle from 'lodash.throttle';

  const form = document.querySelector('.feedback-form');
  const input = document.querySelector('input');
  const textarea = document.querySelector('textarea');
  const storageValue = {
    email: "",
    message: "",
  };
  const localeStorageKey = "feedback-form-state";
  
  input.addEventListener('input', throttle(onEmailInput, 500));
  textarea.addEventListener('input', throttle(onMessageInput, 500));
  form.addEventListener('submit', onFormSubmit);

function onEmailInput(event) {
   storageValue.email = event.target.value;
   localStorage.setItem(localeStorageKey, JSON.stringify(storageValue));
};

function onMessageInput(event) {
    storageValue.message = event.target.value;
    localStorage.setItem(localeStorageKey, JSON.stringify(storageValue));
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    
    if (localStorage.getItem(localeStorageKey)) {
        console.log(localStorage.getItem(localeStorageKey));
    }
}


    
    

