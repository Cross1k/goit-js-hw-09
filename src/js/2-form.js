let formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';

const form = document.querySelector('form');

const frag = document.createDocumentFragment();
const input = document.createElement('input');
const textarea = document.createElement('textarea');
const button = document.createElement('button');

input.classList.add('form-input');
input.type = 'email';
input.name = 'email';
input.autofocus = true;

textarea.classList.add('form-textarea');
textarea.name = 'message';
textarea.rows = '8';

button.classList.add('form-button');
button.type = 'submit';
button.textContent = 'Submit';

const formParams = [input, textarea];

formParams.forEach(param => {
  const label = document.createElement('label');
  label.textContent = param.name[0].toUpperCase() + param.name.slice(1);
  frag.append(label);
  label.append(param);
});
frag.append(button);

form.addEventListener('input', event => {
  if (event.target.nodeName === 'INPUT') formData.email = event.target.value;
  if (event.target.nodeName === 'TEXTAREA')
    formData.message = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formData = JSON.parse(localStorage.getItem(localStorageKey));

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!input.value || !textarea.value) {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

form.append(frag);

input.value = formData.email ?? '';
textarea.value = formData.message ?? '';
