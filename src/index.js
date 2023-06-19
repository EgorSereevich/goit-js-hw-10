import SlimSelect from 'slim-select';
import { refs } from './js/refs.js';
import Notiflix from 'notiflix';
import { creatMarkup } from './js/crearMarkup.js';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const sel = new SlimSelect({
  select: '.breed-select',
  settings: {
    closeOnSelect: true,
  },
});

refs.errorEl.classList.add('is-hidden');
refs.loaderEl.classList.add('is-hidden');

fetchBreeds()
  .then(breeds => sel.setData(creatMarkup(breeds)))
  .catch(error => Notiflix.Notify.failure(console.log(error)));

refs.selectEl.addEventListener('change', onMore);
function onMore(evt) {
  refs.textEl.innerHTML = '';
  console.log(evt);
  let breedId = evt.target.value;
  refs.loaderEl.classList.remove('is-hidden');
  refs.textEl.classList.remove('is-hidden');

  fetchCatByBreed(breedId);
}
