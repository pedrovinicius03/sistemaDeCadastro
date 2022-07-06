// inicio

    console.log("Digite seu nome");

let nomeInserido = "aleatório"

    console.log("Seja bem-vindo !! " + nomeInserido)
// -----------------------------------------------------------------

    console.log("Informe sua idade");

let idadeInformada = 25

    if (idadeInformada <= 18) {
        console.log("Idade não permitida");
    }
    else{
        console.log("Idade permitida, prossiga com o cadastro");
    } 
// -----------------------------------------------------------------

    console.log("Informe a quantidade de participantes");

let quantidadeDeParticipantes = 95

    if (quantidadeDeParticipantes <= 100) {
        console.log("Quantidade de participantes permitida");
    }
    else{
        console.log("Quantidade de participantes não permitida");
    }
// -----------------------------------------------------------------

let dataAtual = new Date (06072022);

    console.log("Digite a data desejada");
    
let dataDesejada = new Date (19112022)

    if (dataDesejada <= dataAtual) {
        console.log("Data inválida, informe uma data posterior a atual");
    }
    else{
        console.log("Data disponível, cadastro concluído !");
    }