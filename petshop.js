const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });



const analisarValoresPetshop =  () => {

    rl.question('Informe a data (no formato DD/MM/AAAA), a quantidade de cães pequenos, e a quantidade de cães grandes (separados por espaço):\n', (dadosUsuario) => {


        //Vamos primeiro lidar com a data escolhida pelo usuário
        const arrayDadosUsuario = dadosUsuario.split(' ');
        const [dataUsuario, pequenos, grandes] = arrayDadosUsuario;
        const [diaInseridoPeloUsuario,
            mesInseridoPeloUsario,
            anoInseridoPeloUsuario] = dataUsuario.split('/');


        // Vamos criar um novo objeto Date, para que possamos obter o dia da semana
        // Lembrando que em Javascript os meses começam pelo 0 e vão até o 11, então vamos subtrair 1 do input do usuário
        const objetoDataFormatado = new Date(
            anoInseridoPeloUsuario,
            mesInseridoPeloUsario - 1,
            diaInseridoPeloUsuario);


        //Hora de obter o dia da semana para saber se o valor final cobrado pelo banho será diferente
        let numeroDiaDaSemanaUsuario = objetoDataFormatado.getDay();
        let nomesDiasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
        let nomeDiaDaSemanaUsuario = nomesDiasDaSemana[numeroDiaDaSemanaUsuario];
     
      
        // Vamos definir os dados de cada petshop
        // Como são apenas 3 petshops, optei por não implementar um atributo "distância", e deixar essa decisão pro final com uso de uma condicional
        let meuCaninoFeliz = {
            nome: 'Meu Canino Feliz',
            valorTosa: (nomeDiaDaSemanaUsuario != "Sábado") ? 20 * pequenos + 40 * grandes : (20 * pequenos + 40 * grandes) * 1.2
        };

        let vaiRex = {
            nome: 'Vai Rex',
            valorTosa: (nomeDiaDaSemanaUsuario != "Sábado") ? 15 * pequenos + 50 * grandes : 20 * pequenos + 55 * grandes
        };

        let chowChawgas = {
            nome: 'ChowChawgas',
            valorTosa: 30 * pequenos + 45 * grandes
        };



        console.log(`\nNo dia escolhido (${nomeDiaDaSemanaUsuario}), você irá pagar no total para cada petshop:
                      Meu Canino Feliz: R$ ${meuCaninoFeliz.valorTosa};
                      Vai Rex: R$ ${vaiRex.valorTosa};
                      Chow Chawgas: R$ ${chowChawgas.valorTosa};\n`)

        //Agora aqui está o pulo do gato: definir o melhor petshop em termos de valor e distância. Vamos para a lógica.


        /*Criei um array com os 3 objetos de petshop, e criei uma variável que armazena o atual valor mais baixo.
        Comecei presumindo que o primeiro valor seja o mais barato, e daí em diante se tiver outro mais baixo, trocaremos esse valor.
        */
        let petShops = [meuCaninoFeliz, vaiRex, chowChawgas];
        let menorValorPetshops = petShops[0].valorTosa;

        //Essa variável vai armazenar os índices do item do array petShops que for considerado o mais barato na atual iteração
        let indicesDoArrayMenorValorPetshops = [0];


        /*
        O laço de repetição a seguir faz duas coisas:
        -> Armazena na variável "menorValor" o menor valor de tosa atual sendo processado pelo laço de repetição
        -> Armazena no array "indicesDoArrayMenorValorPetshops" o index (referente ao array de pet shops) do valor sendo processado (caso ele seja o mais barato)
        */

        for (let i = 1; i < petShops.length; i++) {
            let valorAtual = petShops[i].valorTosa;

            if (valorAtual < menorValorPetshops) {
                menorValorPetshops = valorAtual;
                indicesDoArrayMenorValorPetshops = [i];

            } else if (valorAtual === menorValorPetshops) {
                //Se o item atual tiver o mesmo valor do valor mais baixo de tosa, ambos entrarão para o array "indicesDoArrayMenorValorPetshops" (no caso, seus índices)
                indicesDoArrayMenorValorPetshops.push(i)
            }
        }


        // Fase final: se houver mais de um valor no array de índices, vamos escolher o mais próximo de acordo com a distância

        if (indicesDoArrayMenorValorPetshops.length > 1) {
            //Se o petshop ChowChawgas estiver na briga, ele vai sempre ganhar pois é o mais próximo
            if (indicesDoArrayMenorValorPetshops.includes(2)) {
                console.log(`O petshop mais em conta seria o ChowChawgas, no valor total de R$ ${chowChawgas.valorTosa}`)
            } else {
                //Caso o ChowChawgas não esteja na briga, logicamente se ouver uma briga vai ser entre os outros dois, dos quais o Vai Rex é o mais próximo
                console.log(`O petshop mais em conta seria o Vai Rex, no valor total de R$ ${vaiRex.valorTosa}`)
            }
        } else {
            console.log(`O petshop mais em conta seria o ${petShops[indicesDoArrayMenorValorPetshops].nome}, no valor total de R$ ${petShops[indicesDoArrayMenorValorPetshops].valorTosa}\n`)
        }


        rl.question('Deseja realizar outra consulta? Responda S ou N \n', (resposta) => {
            if (resposta == 's' || resposta == 'S') {
                analisarValoresPetshop()
            } else {
                rl.close();
            }
        })



    });

}


analisarValoresPetshop();