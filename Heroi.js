class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let classe = this.tipo
    let ataque

    if (classe === 'mago') {
      ataque = 'magia'
    } else if (classe === 'guerreiro') {
      ataque = 'espada'
    } else if (classe === 'monge') {
      ataque = 'artes marciais'
    } else if (classe === 'ninja') {
      ataque = 'shuriken'
    }

    console.log(`o ${classe} atacou usando ${ataque}`)
  }
}

const pilarDaPedra = new Heroi('Gyomei Himejima', 27, 'monge')

pilarDaPedra.atacar()
