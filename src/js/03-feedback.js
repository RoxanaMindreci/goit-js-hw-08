// //Exercițiul 3 - formularul pentru feedback
// Codul HTML are structura unui formular. Scrieți un script care va salva valorile câmpurilor în local storage 
//atunci când utilizatorul introduce un caracter.
// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>
// Îndepliniți acest task în fișierele 03-feedback.html și 03-feedback.js. Împărțiți-l în mai multe subtask-uri:

// Urmăriți în formular evenimentul de input și la fiecare modificare să se salveze local un obiect cu câmpurile email și message, 
//unde vor fi stocate valorile curente ale câmpurilor din formular.Cheia obiectului va fi "feedback-form-state"
// La încărcarea paginii, verificați starea storage-ului, iar dacă există date salvate, completați câmpurile formularului cu aceste date. 
//În caz contrar, câmpurile vor fi goale.
// Când se trimite formularul, la evenimentul submit, ștergeți câmpurile din local storage și afișați în consolă obiectul cu câmpurile 
//email, message și valorile lor curente.
// Asigurați-vă că datele vor fi stocate și actualizate doar o dată la 500 de milisecunde. Pentru a face acest lucru, adăugați la 
//proiect și utilizați librăria lodash.throttle.

import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
};

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
};

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  dataForm = {};
};