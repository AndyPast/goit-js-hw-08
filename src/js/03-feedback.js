// {/* <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>; */}

import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');

// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт
// з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// 2.Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені
// дані, заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// 3.Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль
// об'єкт з полями email, message та їхніми поточними значеннями.
// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input[name=email]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.email.addEventListener('input');

populateTextArea();

// - останавливаем поведение по умолчанию
// - убираем сообщение из хранилища
// - очищаем форму

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// - получаем значение поля
// - сохраняем его в хранилище
// - можно добавить throttle

function onTextareaInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem(STORAGE_KEY, message);
}

// - получаем значение из хранилища
// - если там что-то было, обновляем DOM

function populateTextArea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}

// function loadData() {
//   console.log(refs.formElem.elements);
//   const value1 = loadFromLs('email');
//   const value2 = loadFromLs('message');

//   const nameElem = refs.formElem.elements.email;
//   const messageElem = refs.formElem.elements['message'];

//   nameElem.value = value1;
//   messageElem.value = value2;
// }

// loadData();

// refs.formElem.addEventListener('input', e => {
//   const nameElem = e.target.name;
//   const value = e.target.value;
//   saveToLs(nameElem, value);
// });
