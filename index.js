class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;
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
console.log(cliente1);
console.log(cliente2);