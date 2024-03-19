public class atv-03{

    function verificarSaldo(saldo){
        if (saldo > 0){
      console.log("saldo positivo")
        }else{
      console.log("saldo negativo")
        } 
    }
    function realizarSaque(saldoAtual, ValorSaque){
        if (ValorSaque <= saldoAtual){
        saldoAtual-=ValorSaque;
        consolo.log('saque realizado cmo sucesso. saldo atual é de R$${saldoAtual}');
        }else{
        console.log("saldo insuficiente");
        }
    }
  
    function realizarDeposito(saldoAtual, valorDeposito){
        saldoAtual+=valorDeposito;
        console.log('deposito realizado com sucesso. novo saldo é de R$${SaldoAtual}');
    }
  
    function realizarTransferencia(saldoOrigem,saldoDestino,valorTransferencia,limiteTransferencia){
        if (valorTransferencia<= saldoOrigem && valorTransferencia<=limiteTransferencia){
        saldoOrigem-=valorTransferencia;
        saldoDestino+=valorTransferencia;
        console.log('transferencia realizada com sucesso');
        }else if(valorTransferencia>saldoOrigem){
        console.log('saldo insuficiente para a operação')
        }else{
        console.log('valor excede o limite da operação')
        }
    }
    function checarChequeEspecial(saldo){
        if(saldo>=0)
            console.log('dentro do limite do cheque especial');
        }else{
            console.log('fora do limite do cheque especial');
        }
    }

    function atualizarCadastro(cadastroAtivo, saldo){
        if(cadastroAtivo){
            if(cadastroAtivo>0){
                console.log('cadastro ativo e saldo positivo')
        }else if(saldo<0){
            console.log('cadastro ativo mas precisa regularizar saldo')
        }else{
            console.log('por favor atualize seu cadastro')
        }       
    }
    
    function avaliarCredito(saldo,historicoCredito,rendaMesal){
        if(saldo>1000 && historicoCredito&&rendaMesal>3000){
            console.log('credito aprovado');
        }else{
            console.log('Credito Negado');
        }
    }

    

}  