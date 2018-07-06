export default class Dog {
  constructor(name) {
    this.name = name
  }

  get bark() {
    return `Wah wah, I am ${this.name}`
  }
}
