import refs from '../refs';
import backgroundImageService from '../services/background-image-service';

// Установка дефолтного фона при первой загрузке
backgroundImageService
  .makeQuery()
  .then(setBackgroundImage)
  .catch(() => {
    backgroundImageService.makeReserveQuery().then(setBackgroundImage);
  });

refs.searchInput.addEventListener('submit', changeBackgroundImage);

function changeBackgroundImage(event) {
  event.preventDefault();

  const form = event.currentTarget;
  backgroundImageService.query = form.elements.query.value;

  backgroundImageService.makeQuery().then(setBackgroundImage);
}

function setBackgroundImage(backgroundImages) {
  if (backgroundImages.length === 0) {
    backgroundImageService.makeReserveQuery().then(setBackgroundImage);
  } else {
    refs.backgroundWrapper.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
  url('${backgroundImages[6].largeImageURL}') center; background-size: cover;`;
  }
}
