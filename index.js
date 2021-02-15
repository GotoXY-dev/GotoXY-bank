class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
        
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 12342134;

const cliente2 = new Cliente();

cliente2.nome = "Joana";
cliente2.cpf = 12341234;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);

let valorSacado = 200;
if(contaCorrenteRicardo.saldo >= valorSacado){
    contaCorrenteRicardo.saldo -= valorSacado;
}



console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);