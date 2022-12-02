import answerWords from "./answerWords"

function getRandomWord(array) {

  const randomIndex = Math.floor(Math.random() * (array.length));

  const word = array[randomIndex]

  return word.toUpperCase()
}

const RandomWord = getRandomWord(answerWords)

export default RandomWord