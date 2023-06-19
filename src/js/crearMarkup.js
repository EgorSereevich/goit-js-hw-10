function creatMarkup(breeds) {
  return breeds.map(({ id, name }) => ({ text: name, value: id }));
}
function creatCard(breed) {
  return breed.map(
    bre => ` <img src="${bre.url}" alt="${bre.breeds[0].name}" width ="300" haight ="300">
    <h2>${bre.breeds[0].name}</h2>
    <p>${bre.breeds[0].description}</p>
    <p>Temperament: ${bre.breeds[0].temperament}</p>`
  );
}
export { creatMarkup, creatCard };
