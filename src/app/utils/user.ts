export class User{
  private _firstName: string;
  private _lastName: string;
  private _gender: string;
  private _dob: number;
  private _email: string;
  constructor(firstName?: string, lastName?: string, gender?: string, dob?: number, email?: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.dob = dob;
    this.email = email;
  }
  public get firstName():string {
    return this._firstName;
  }
  public set firstName(v: string) {
    this._firstName = v;
  }
  public get lastName():string {
    return this._lastName;
  }
  public set lastName(v: string) {
    this._lastName = v;
  }
  public get dob():number {
    return this._dob;
  }
  public set dob(v: number) {
    this._dob = v;
  }
  public get gender():string {
    return this._gender;
  }
  public set gender(v: string) {
    this._gender = v;
  }
  public get email():string {
    return this._email;
  }
  public set email(v: string) {
    this._email = v;
  }
}
