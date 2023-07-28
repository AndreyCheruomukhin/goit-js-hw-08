
import throttle from 'lodash.throttle';
let formData = {};
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);



function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

if(localStorage.getItem('feedback-form-state')){
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  for (let key in formData){
    form.elements[key].value = formData[key];
  }
}

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  e.preventDefault();
  e.currentTarget.reset();
localStorage.removeItem('feedback-form-state');
 }






