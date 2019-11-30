class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }  
  info() {
    console.log("こんにちは");
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}
export default Human;