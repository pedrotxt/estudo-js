//Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

//1 - Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class ContaBancaria{
    // sempre que formos passar os parametros do que vamos passar para essa classe quando a gente for declarar uma nova instancia, quando formos criar uma nova conta bancaria, tudo que a gnte vai mandar, no momento da criação a gnte coloca no construtor 
    constructor(agencia, numero, tipo){
        //o this sempre se refere ao Objeto, que no caso "ContaBancaria"
        // então o this.agencia da ContaBancaria vai ser igual o agencia que a gente mandar la na hora de instanciar.
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        // sempre que for ter um getter e um setter colocar um anderlaine na frente, para que a nossa função get e set tenha o nome saldo so que a propriedade não vai ter o nome saldo.
        this._saldo = 0;
    }

    // 2 - Dentro de ContaBancaria, construa o getter e o setter de saldo;
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    // 3 - Dentro de ContaBancaria, crie os métodos sacar e depositar;
    sacar(valor){
        if (valor > this._saldo) {
            return 'Operação negada'
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }
    depositar(valor){
        if (valor <= 0) {
            return 'Operação negada'
        }
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

// 4 - Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito) {
        // vai setar pra essa ContaCorrente todas as propriedades da classe pai
        super(agencia, numero);
        // 6 - Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    // 5 - Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
    get cartaoCredito(){
        return this.cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

// 7 - Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

// 8 - Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }
    // 9 - Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
    // vamos sobrescrever o método sacar

    sacar(valor){
        if (valor > 500) {
            return 'Operação negada'
        }
        this._saldo = this._saldo - valor;
    }
}

//const minhaConta = new ContaCorrente
//const minhaConta = new ContaCorrente(1, 234, true)