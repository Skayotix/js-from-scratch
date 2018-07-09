// @flow

export default class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  get bark(): string {
    return `Wah wah, I am ${this.name}`
  }
}
