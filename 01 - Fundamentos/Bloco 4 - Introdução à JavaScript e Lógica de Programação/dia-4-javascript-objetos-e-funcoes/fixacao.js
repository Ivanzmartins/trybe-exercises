// // let diasDaSemana = {
// //     1: 'domingo',
// //     2: 'segunda',
// //     3: 'terça',
// //     4: 'quarta',
// //     5: 'quinta',
// //     6: 'sexta',
// //     7: 'sábado',
// //     };
    
// //     // diasDaSemana.1; // SyntaxError: Unexpected number
// //     console.log(diasDaSemana[2]); // domingo

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

// let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

// // Exercicios de fixação 1 a 5
// let player = {
//      name : 'Marta',
//      lastName : 'Silva',
//      age : 34,
//      medals : { golden: 2, silver: 3 },
//      bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]

// }
// console.log("A jogadora " + player.name + ' ' +player.lastName+ " tem " + player.age +" anos de idade."  )
// console.log("A jogadora " + player.name + ' ' +player.lastName+ " foi eleita a melhor do mundo por " + player.bestInTheWorld.length +" vezes."  )
// console.log("A jogadora " + player.name + ' ' +player.lastName+ " possui " + player.medals.golden +" medalhas de ouro e " + player.medals.silver + " medalhas de prata."  )

