const searchInput = document.querySelector('.search-location__form');
const backgroundWrapper = document.querySelector('.background-wrapper');
const addToLocalStorageBtn = document.querySelector(
  '.search-location__form-btn',
);
const form = document.querySelector('.search-form');
const listOfButtons = document.querySelector('.search-location__slider-list');
const btnPrev = document.querySelector('.search-location__slider-btnPrev');
const btnNext = document.querySelector('.search-location__slider-btnNext');

// DOM переменные
const btnFiveDays = document.querySelectorAll('.btn-5-days-js');
const btnOneDay = document.querySelectorAll('.btn-today-js');
const contentBox = document.querySelector('.today-box');
const part6 = document.querySelector('.moreInfo');
const dateSunriseTime = document.querySelector('.date__sunrise--time');
const dateSunsetTime = document.querySelector('.date__sunset--time');
const daysFiveListblock = document.querySelector('.days-list');
const moreInfoBlock = document.querySelector('.moreInfo__block');
const part2City = document.querySelector('.today-city');
const fiveDaysContaineerCityName = document.querySelector(
  '.five-days-containeer__city-name',
);
const todayContainer = document.querySelector('.today-container');
const fiveDaysContainer = document.querySelector('.five-days-container');

export default {
  searchInput,
  backgroundWrapper,
  addToLocalStorageBtn,
  form,
  listOfButtons,
  btnPrev,
  btnNext,
  btnFiveDays,
  btnOneDay,
  contentBox,
  part6,
  dateSunriseTime,
  dateSunsetTime,
  daysFiveListblock,
  moreInfoBlock,
  part2City,
  fiveDaysContaineerCityName,
  todayContainer,
  fiveDaysContainer,
};
