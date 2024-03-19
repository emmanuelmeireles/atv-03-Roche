# atv-03-Roche
lista de atividades a entregar
Olá a todos, segue um ajuste no enunciado da ATV 3 que esqueci de adicionar

 

Objetivo: Desenvolver um script em JavaScript que simule algumas operações bancárias básicas, permitindo ao usuário interagir com o sistema por meio de um menu de opções. Este projeto tem como intuito aplicar conceitos de programação, lógica de decisão e manipulação de dados. Para isso, juntar todo as perguntar/código da atividade e adicionar um MENU (use switch case do js)

Descrição: Você deve criar um sistema bancário simplificado que ofereça ao usuário a possibilidade de realizar diferentes operações, tais como verificar saldo, realizar saques, depósitos, transferências, checar o status do cheque especial, atualizar o cadastro e avaliar crédito. O sistema deve ser interativo e fácil de usar, com um menu que permita ao usuário escolher a operação desejada e fornecer os dados necessários para cada tipo de transação.




Todas as atividades, devem ser enviadas apenas via github. Não copie ou cole, pois irei usar detector de similaridade entre código, se for semelhante, será zerado a nota. Assim, peço que se empenhe em fazer

Exercício 1: Verificação de Saldo

Crie uma função chamada verificarSaldo que recebe um parâmetro saldo. A função deve imprimir "Saldo positivo" se o saldo for maior que 0, e "Saldo negativo" caso contrário.

javascript



function verificarSaldo(saldo) {

  if (saldo > 0) {

    console.log("Saldo positivo");

  } else {

    console.log("Saldo negativo");

  }

}


Exercício 2: Saque em Conta

Escreva uma função realizarSaque que recebe dois parâmetros: saldoAtual e valorSaque. Se o valorSaque for menor ou igual ao saldoAtual, subtraia o valor do saldo e imprima "Saque realizado com sucesso. Saldo atual: R$X". Caso contrário, imprima "Saldo insuficiente".

javascript



function realizarSaque(saldoAtual, valorSaque) {

  if (valorSaque <= saldoAtual) {

    saldoAtual -= valorSaque;

    console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);

  } else {

    console.log("Saldo insuficiente");

  }

}


Exercício 3: Depósito em Conta

Desenvolva uma função realizarDeposito que aceita dois argumentos: saldoAtual e valorDeposito. A função deve adicionar valorDeposito ao saldoAtual e imprimir o novo saldo com a mensagem "Depósito realizado com sucesso. Novo saldo: R$X".

javascript





function realizarDeposito(saldoAtual, valorDeposito) {

  saldoAtual += valorDeposito;

  console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);

}


Exercício 4: Transferência Entre Contas

Crie uma função realizarTransferencia que recebe quatro parâmetros: saldoOrigem, saldoDestino, valorTransferencia, e limiteTransferencia. Se o valorTransferencia for menor ou igual ao saldoOrigem e não ultrapassar o limiteTransferencia, subtraia o valor do saldoOrigem, adicione ao saldoDestino e imprima "Transferência realizada com sucesso". Caso contrário, imprima a mensagem adequada para o erro ocorrido.

javascript





function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {

  if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {

    saldoOrigem -= valorTransferencia;

    saldoDestino += valorTransferencia;

    console.log("Transferência realizada com sucesso");

  } else if (valorTransferencia > saldoOrigem) {

    console.log("Saldo insuficiente para transferência");

  } else {

    console.log("Valor excede o limite de transferência");

  }

}


Exercício 5: Cheque Especial

Implemente uma função checarChequeEspecial que recebe um parâmetro saldo. A função deve imprimir "Dentro do limite do cheque especial" se o saldo for negativo, e "Fora do limite do cheque especial" se o saldo for positivo ou zero.

javascript





function checarChequeEspecial(saldo) {

  if (saldo < 0) {

    console.log("Dentro do limite do cheque especial");

  } else {

    console.log("Fora do limite do cheque especial");

  }

}


Exercício 6: Atualização de Cadastro

Escreva uma função atualizarCadastro que recebe dois parâmetros: cadastroAtivo (booleano) e saldo. Se o cadastro estiver ativo e o saldo maior que 0, imprima "Cadastro ativo e saldo positivo". Se o cadastro estiver ativo mas o saldo não for maior que 0, imprima "Cadastro ativo mas precisa regularizar saldo". Caso o cadastro não esteja ativo, independentemente do saldo, imprima "Por favor, atualize seu cadastro".

javascript





function atualizarCadastro(cadastroAtivo, saldo) {

  if (cadastroAtivo) {

    if (saldo > 0) {

      console.log("Cadastro ativo e saldo positivo");

    } else {

      console.log("Cadastro ativo mas precisa regularizar saldo");

    }

  } else {

    console.log("Por favor, atualize seu cadastro");

  }

}


Exercício 7: Limite de Crédito

Crie uma função avaliarCredito que recebe três parâmetros: saldo, historicoCredito (um valor booleano que indica se o histórico de crédito é bom) e rendaMensal. A função deve imprimir "Crédito aprovado" se o saldo for superior a R1.000, o histórico de crédito for bom e a renda mensal for superior a R3.000. Caso contrário, imprima "Crédito negado".

javascript





function avaliarCredito(saldo, historicoCredito, rendaMensal) {

  if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {

    console.log("Crédito aprovado");

  } else {

    console.log("Crédito negado");

  }

}

------------Exemplo simples de switch case em JavaScript para criar MENU


let fruta = 'maçã';

switch (fruta) {
    case 'banana':
        console.log('Amarela e curva');
        break;
    case 'maçã':
        console.log('Vermelha e redonda');
        break;
    case 'uva':
        console.log('Pequena e roxa');
        break;
    default:
        console.log('Fruta não identificada');
        break;
}