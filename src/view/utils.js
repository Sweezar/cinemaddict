export { getRandomArrayElement, randomNumber, shuffle, limitStr };

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(elements) {
  return elements[randomNumber(0, elements.length - 1)];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function limitStr(str, n) {
  return str.substr(0, n - 3) + '...';
}
