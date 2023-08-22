
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}
function Cargo(cargo) {
    this.cargo = cargo;
    this.dizCargo = function() {
        console.log(this.nome + " tem o cargo de " + this.cargo);
    }
}
function Funcionario(nome,cargo,setor,modalidade,anoAdmissao) {
    this.setor = setor;
    this.modalidade = modalidade;
    this.anoAdmissao = anoAdmissao;
    Pessoa.call(this, nome);
    Cargo.call (this, cargo);
}


const funcClaudenir = new Funcionario("Claudenir", "Programador", "Automação", "CLT", "2024");
const funcBeatriz = new Funcionario("Beatriz", "Farmacêutica", "Clínico", "CLT", "2023");
const funcTalia = new Funcionario("Talia", "Contadora", "Contábil", "Estágio", "2024")

funcBeatriz.dizCargo();
console.log(funcClaudenir);
funcTalia.dizOi();