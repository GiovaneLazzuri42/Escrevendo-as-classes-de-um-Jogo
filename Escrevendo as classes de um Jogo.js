class Heroi {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "guerreiro":
          ataque = "espada";
          break;
        case "mago":
          ataque = "magia";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque desconhecido";
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Testando os ataques
  new Heroi("Arthur", "guerreiro").atacar(); // guerreiro atacou usando espada
  new Heroi("Merlin", "mago").atacar();    // mago atacou usando magia
  new Heroi("Li", "monge").atacar();      // monge atacou usando artes marciais
  new Heroi("Toshiro", "ninja").atacar(); // ninja atacou usando shuriken
  