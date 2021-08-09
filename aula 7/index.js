function Pessoa(nome, sobrenome) {
// atributo ou metodo privado
const ID = 12345;
const metodoInterno = function() {

};

// atributo ou metodo publico
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': sou um metodo');
  };
}

const p1 = new Pessoa('matheus kennedy');
const p2 = new Pessoa('sammara carla');
p2.metodo();