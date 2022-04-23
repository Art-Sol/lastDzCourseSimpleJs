// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */




/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


// Возьмите свой код из предыдущей практики


'use strict';



document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			 "Логан",
			 "Лига справедливости",
			 "Ла-Ла лэнд",
			 "Одержимость",
			 "Скотт Пилигрим против..."
		]
  };
  
  
	  function deleteAdvert() {
		  const advertItem = document.querySelectorAll('.promo__adv img');
		  advertItem.forEach( item => item.remove() );
	  }
  
	  deleteAdvert();
  
  
	  function changeGanre() {
		  const genre = document.querySelector('.promo__genre');
		  genre.textContent = 'драма';
	  }
  
	  changeGanre();
  
  
	  function backgroundChange(bgNameExtension) {
		  const bgImage = document.querySelector('.promo__bg');
		  bgImage.style.cssText = `background: url(../img/${bgNameExtension}) center center/cover no-repeat;`;
	  }
  
	  backgroundChange('bg.jpg');
  
  
	  function movieList(obj) {
		  const movieList = document.querySelector('.promo__interactive-list'),
				  objectDB = obj;
  
		  objectDB.movies.sort();
  
		  movieList.innerHTML ="";
  
		  objectDB.movies.forEach((film, i) => {
			  movieList.innerHTML += `
				  <li class="promo__interactive-item">${i + 1} ${film}
					  <div class="delete"></div>
				  </li>
			  `;
		  });
  
	  }
  
	  movieList(movieDB);
  
  
	  function addFilm(obj) {
		  const btnAgree = document.querySelector('button'),
				  objectDB = obj,
				  inputText = document.querySelector('.adding__input');
  
		  btnAgree.addEventListener('click', (event) => {
			  event.preventDefault();
			  let nameMovie = inputText.value;
			  let favoriteMovieInput = document.querySelector('input[type="checkbox"]');
		  
  
			  if (nameMovie) {
				  if (nameMovie.length > 21) {
					  nameMovie.slice(0, 21);
					  nameMovie += '...';
				  }
  
				  objectDB.movies.push(nameMovie);
				  movieList(objectDB);
  
				  if (favoriteMovieInput.checked) {
					  console.log("Добавляем любимый фильм");
				  }
			  }
  
  
  
  
		  });
	  }
  
	  addFilm(movieDB);
  
  
	  function deleteMovieFromList(obj) {
		  const moviesList = document.querySelector('.promo__interactive-list');
  
		  moviesList.addEventListener('click', (event) => {
			  if (event.target.className === "delete") {
				  let nameMovie = event.target.parentElement.innerText;
				  nameMovie = nameMovie.split(' ')
											  .slice(1)
											  .join(' ');
				  let newArr = obj.movies.map(item => item.toLowerCase());
				  let index = newArr.indexOf(nameMovie.toLowerCase());
				  obj.movies.splice(index, 1);
				  movieList(obj);
			  }
		  });
	  }
  
	  deleteMovieFromList(movieDB);
  

});


