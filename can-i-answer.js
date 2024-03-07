// O que é futebol?
export const palavrasFutebol = {
  probablyWords: [
  "que", "futebol",
  "q", "é", "futebol",
  "q", "futebol",
  "que", "e", "futebol",
  "q", "futebol",
  "me", "explica", "que", "futebol",
  "sabe", "me", "dizer", "o", "que", "futebol"
  ],
  matched: 0,
  keywords: ["futebol"]
}

// Quais as regras do futebol?
export const palavrasRegras = {
  probablyWords: [
  "quais", "as", "regras", "do", "futebol",
  "quais", "sao", "as", "regras", "do", "futebol",
  "regras", "do", "futebol",
  "futebol", "regras",
  "como", "funciona", "o", "futebol"
  ],
  matched: 0,
  keywords: ["quais", "regras"]
}

// Que time ele mais gosta?
export const palavrasTimeGosta = {
  probablyWords: [
  "que", "mais", "gosta",
  "qual", "você", "torce",
  "preferido",
  "clube", "coração",
  "do",
  "time", "você",
  ],
  matched: 0,
  keywords: ["time", "torce", "favorito", "preferido"]
}

// Palmeiras tem mundial?
export const palavrasMundialPalmeiras = {
  probablyWords: [
  "palmeiras", "tem", "mundial",
  "mundial", "palmeiras",
  "mundial",
  "tem", "copa", "do", "mundo",
  "campeão", "mundial"
  ],
  matched: 0,
  keywords: ["palmeiras", "mundial"]
}

export const palavrasPapoFurado = {
  probablyWords: [
      "basquete", "triatlo", "ping-pong",
      "escola", "sair",
  ],
  matched: 0,
  keywords: ["basquete", "escola", "festa"]
}

export const comoDarUmaBicicleta = {
  probablyWords: [
      "bicicleta", "pular", "gol", "de",
      "como", "dar", "jeito"
  ],
  matched: 0,
  keywords: ["como", "bicicleta"]
}

function showAnswer(index) {
  switch (index) {
      case 0:
          return "O futebol é o esporte mais conhecido do mundo e mais difundido em todos os países, sendo o Brazil e a Europa os maiores!"
      case 1:
          return "Algumas regras do futebol seria: não pode agressão, não pode gol contra"
      case 2:
          return "Eu gosto do tigre"
      case 3:
          return "O palmeiras não tem mundial, mas tem copa RIO, mas eles falam que tem né, fazer oq"
      case 4:
          return "Para se dar uma bicicleta, só dar um mortal chutando"
      default:
          return "Só sei falar de futebol meu amigo, se não for isso, tchau"
  }
}

export function mostProbablyQuestion(pergunta) {
  // if (pergunta.includes("basquete")) {
  //     return "não falo de basquete"
  // }
  let matches = [
      palavrasFutebol.matched, 
      palavrasRegras.matched, 
      palavrasTimeGosta.matched,
      palavrasMundialPalmeiras.matched, 
      comoDarUmaBicicleta.matched,
      palavrasPapoFurado.matched,
  ]

  

  console.log(">> matches", matches)

  // Se nenhum dos bancos for tensionado com o valor 3, a pergunta é considerada como "papo furado"
  // Ou seja, o mínimo para que uma pergunta seja tensionada a um banco é 4
  if(Math.max(...matches) <= 3) {
    return showAnswer(undefined)
  }

  return showAnswer(matches.indexOf(Math.max(...matches)))
}