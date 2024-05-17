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

input.type = 'email';
input.name = 'email';
input.autofocus = true;

textarea.name = 'message';
textarea.rows = '8';

button.type = 'submit';
button.textContent = 'Submit';

const formParams = [input, textarea];

formParams.forEach(param => {
  const label = document.createElement('label');
  label.textContent = param.name[0].toUpperCase() + param.name.slice(1);
  label.style.marginBottom = '8px';
  param.style.padding = '8px 16px';
  param.style.marginTop = '8px';
  param.style.outline = 'none';
  param.style.border = '1px solid #000';
  param.style.borderRadius = '4px';

  frag.append(label);
  label.append(param);
  label.style.display = 'flex';
  label.style.flexDirection = 'column';
});
frag.append(button);

form.addEventListener('mouseover', event => {
  if (event.target.nodeName == 'FORM') return;
  event.target.style.transition = 'border-color 400ms ease';
  event.target.style.borderColor = '#808080';
  if (event.target.nodeName == 'BUTTON') {
    event.target.style.transition = 'background-color 400ms ease';
    event.target.style.backgroundColor = '#6c8cff';
  }
});

form.addEventListener('mouseout', event => {
  if (event.target.nodeName == 'FORM') return;
  event.target.style.transition = 'border-color 400ms ease';
  event.target.style.borderColor = '#000';
  if (event.target.nodeName == 'BUTTON') {
    event.target.style.transition = 'background-color 400ms ease';
    event.target.style.backgroundColor = '#4e75ff';
  }
});

form.addEventListener('input', event => {
  event.target.style.transition = 'border-color 400ms ease';
  event.target.style.borderColor = '#000';
  if (event.target.nodeName == 'INPUT') {
    formData.email = event.target.value;
  }
  if (event.target.nodeName == 'TEXTAREA') {
    formData.message = event.target.value;
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

let item = JSON.parse(localStorage.getItem(localStorageKey));

form.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value === '' || textarea.value === '') {
    return alert('Fill please all fields');
  }
  console.log(`Email: ${item.email}`);
  console.log(`Message: ${item.message}`);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

form.style.maxWidth = '408px';
form.style.margin = '40px auto 0';
form.style.padding = '24px';

textarea.style.resize = 'none';

button.style.display = 'block';
button.style.border = 'none';
button.style.padding = '6px 16px';
button.style.borderRadius = '8px';
button.style.marginTop = '16px';
button.style.color = '#fff';
button.style.backgroundColor = '#4e75ff';
button.style.letterSpacing = '0.04em';
button.style.lineHeight = '1.5';
// button.style.cursor = 'pointer';
form.append(frag);

input.value = item.email ?? '';
textarea.value = item.message ?? '';
