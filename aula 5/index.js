function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome, sobrenome,
    
 nomeCompleto () {
  return `${nome} ${sobrenome}`;
},

    fala: function(assunto) {
      return `${nome} esta ${assunto}`;
    },
    altura: a,
    peso: p,


    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}
const p1 = criaPessoa('mateus', 'kennedy');
console.log(p1.nomeCompleto());