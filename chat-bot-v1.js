import { palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, comoDarUmaBicicleta, palavrasPapoFurado, mostProbablyQuestion } from './can-i-answer.js'
// O que ele vai poder responder?
// - O que é futebol?
// - Quais as regras do futebol?
// - Que time ele mais gosta?
// - Palmeiras tem mundial?
// - PAPO FURADO?

// Separe a frase em uma array de palavras
const pergunta = "Como dar uma bicicleta?"

const perguntaSanitizada  = removeQuestionMark(pergunta.toLowerCase())
const perguntaArr = perguntaSanitizada.split(' ')

const bancos = [
    palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, comoDarUmaBicicleta, palavrasPapoFurado,
]

bancos.forEach(banco => {

  let palavrasCorrespondentesAKeyword = []

  perguntaArr.forEach(palavra => {

    if(banco.probablyWords.includes(palavra)) {
      banco.matched++
    }

    if(banco.keywords.includes(palavra)) {
      palavrasCorrespondentesAKeyword.push(palavra)
      banco.matched += palavrasCorrespondentesAKeyword.length
    }

  })
})

// for (let i = 0; i < pergunta.length; i++) { // Palavra i
//     for (let j = 0; j < bancos.length; j++) { // Procura a palavra i, no banco j
//         if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
//             bancos[j].matched++
//         }
//     }
// }


console.log("> A pergunta foi: ", pergunta);

console.log("> Resposta: ", mostProbablyQuestion(pergunta))
// Ande pela array de palavras
  // Veja se a palavra existe no banco X, 
  // senão, veja no Y, 
  // senão, veja no Z...TEM NO Z? tensione (aumente o matched em 1)


function removeQuestionMark(text = "") {
  const questionMarkIndex = text.indexOf("?")

    return text.slice(0, questionMarkIndex)
}