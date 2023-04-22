// Soldier
class Soldier {
  //construtor só vai propriedades
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  //métodos vão pra fora do construtor
  //métodos = funções
  //dentro da classe -> só acessa as propriedades da classe com a lalavra this
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  //Vikings vai ter todos os métodos e propriedades que um SOLDIER tem.
  constructor(name, health, strength) {
    //super declamara quais as propriedades que queremos aproveitar da nossa herança
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    //tirar da saúde o dano
    this.health -= damage;

    if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  //só é preciso chamar o construtor quando desejams alterar alguma propriedade

  receiveDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.saxonArmy = [];
    this.vikingArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    //escolher um saxon randomicamente
    //escolher um viking randomicamente



  }
}



