import moreInfoTemp from '../../template/moreinfo.hbs';
import refs from '../refs';
import api from '../apiService';
let moreInfoData = {};

// Рендерим more info
const renderMoreInfo = target => {
  moreInfoData = api.dataProcessingMoreInfo();
  refs.part6.classList.remove('isHiden');
  const day = Number(target.dataset.day);
  const moreDaysListItem = document.querySelectorAll('.timeWeather');
  if (moreDaysListItem) {
    moreDaysListItem.forEach(e => e.remove());
  }
  const currentMoreInfo = moreInfoData.find(e => e.DayNum == day);
  refs.moreInfoBlock.innerHTML += moreInfoTemp(currentMoreInfo.forecast);
};

// Слушаем кнопку more info
refs.daysFiveListblock.addEventListener('click', handleBtnMIClick);

function handleBtnMIClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName == 'BUTTON') {
    renderMoreInfo(target);
  }
}
