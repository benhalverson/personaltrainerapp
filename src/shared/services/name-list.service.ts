export class NameListService {
  // names = [
  //   'Edsger Dijkstra',
  //   'Donald Knuth',
  //   'Alan Turing',
  //   'Grace Hopper'
  // ];

  // class person{
  //   this.fn,
  //   this.ln
  // }

person = [{
  ffirstName: 'Ben',
  lastName: 'Halverson',
  age: 34
}];

  get(): any[] {
    return this.person;
  }
  add(firstName: string, lastName: string, age: number): void {


    this.person.push({firstName});
    console.log('person: ', this.person);
  }
}
