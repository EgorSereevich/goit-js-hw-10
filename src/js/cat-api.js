import { refs } from './refs';
import { creatCard } from './crearMarkup';
import Notiflix from 'notiflix';
const HREF_API = 'https://api.thecatapi.com/v1';
const KEY_API =
  'live_kXie3LWQEStVe7nlR7VhEHrfc6NRt2OhpriXgy1hjdWC4IT3gMwtZuAiSy0BlAKI';
function fetchBreeds() {
  return fetch(`${HREF_API}/breeds?api_key=${KEY_API}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
function fetchCatByBreed(breedId) {
  return fetch(
    `${HREF_API}/images/search?breed_ids=${breedId}&api_key=${KEY_API}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(breed =>
      refs.textEl.insertAdjacentHTML('beforeend', creatCard(breed))
    )

    .catch(error => Notiflix.Notify.failure(console.log(error)))
    .finally(result => refs.loaderEl.classList.add('is-hidden'));
}
export { fetchBreeds, fetchCatByBreed };
