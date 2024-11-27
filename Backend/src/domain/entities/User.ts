export class User {
 constructor (
    public id: string,
    public name: string,
    public email: string,

 ){}
 updateName (name: string): void {
    this.name = name
 }
}