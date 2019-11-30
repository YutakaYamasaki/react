import Human from "./human";

class Japanese extends Human {
  constructor(name,age,race){
    super(name,age);
    this.race = race;
  }
  
  info() {
    console.log("こんにちは");
    console.log(`名前は${this.name}です`);

    console.log(`出身は${this.race}です`);
    
    console.log(`${this.age}歳です`);
  }
}

const japanaese = new Japanese("Yutaka", 26,"日本");
japanaese.info();