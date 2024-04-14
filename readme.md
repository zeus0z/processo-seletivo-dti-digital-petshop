# Desafio
Senhor Eduardo é proprietário de um canil em Belo Horizonte, ele trabalha com diversas raças, pequenas e
grandes. Eduardo gosta que seus cães estejam sempre arrumados, felizes e cheirosos.
No bairro do canil, para realizar o banho nos animais, existem três petshops: Meu Canino Feliz, Vai Rex, e
ChowChawgas. Cada um deles cobra preços diferentes para banho em cães pequenos e grandes e o preço
pode variar de acordo com o dia da semana.


- Meu Canino Feliz: Está distante 2km do canil. Em dias de semana o banho para cães pequenos custa
R$ 20,00 e o banho em cães grandes custa R$ 40,00. Durante os finais de semana o preço dos banhos é
aumentado em 20%.
- Vai Rex: Está localizado na mesma avenida do canil, a 1,7km. O preço do banho para dias úteis em cães
pequenos é R$ 15,00 e em cães grandes é R$ 50,00. Durante os finais de semana o preço para cães
pequenos é R$20,00 e para os grandes é R$ 55,00.
- ChowChawgas: Fica a 800m do canil. O preço do banho é o mesmo em todos os dias da semana. Para
cães pequenos custa R$ 30,00 e para cães grandes R$ 45,00.
Apesar de se importar muito com seus cãezinhos, Eduardo quer gastar o mínimo possível. Desenvolva uma
solução para encontrar o melhor petshop para levar os cães. O melhor petshop será o que oferecer menores
preços, em caso de empate o melhor é o mais próximo do canil.

## Entrada
A entrada deve ser no modelo `<data> <quantidade de cães pequenos> <quantidade cães grandes>`.

Exemplo: `03/08/2018 3 5`

## Saída
Nome do melhor canil e preço total dos banhos.


# Premissas Assumidas
- Presume-se que nenhum petshop ofereça serviços aos domingos

# Decisões de Projeto
- Será usada a biblioteca padrão do Node.js para leitura dos parâmetros inseridos pelo usuário
- Os dados serão tratados para se obter um objeto `Date` javascript, o qual será usado para determinar se é Sábado (dia em que os valores podem se alterar);
- Serão instanciados objetos para cada um dos petshops, com dados de nome e valores, tanto para o meio de semana quanto fim de semana, de acordo com a quantidade de cães inseridas pela usuário;
- Após a verificação dos valores, caso haja um ou mais petshops com o mesmo valor, e esse valor seja o menor dentre os possíveis, será realizada uma pequena condicional que escolherá o petshop mais próximo.
- Serão apresentados os valores dos três petshops, e será feita a recomendação do que é mais barato.
- Ao final da simulação de valores, será oferecido ao usuário realizar outra consulta.

# Instruções para execução do projeto
- Faça um clone ou download dos arquivos do projeto
- Se certifique de que o Node.js está instalado na sua máquina
- Abra o prompt de comando na pasta onde o projeto foi baixado
- Execute o comando `node petshop.js`
