export class User{
  private _firstName: string;
  private _lastName: string;
  private _gender: string;
  private _dob: number;
  private _email: string;
  private _role: number;
  private _password: string;
  private _userId: number;
  constructor(userId: number, role: number, email: string, firstName?: string, lastName?: string, gender?: string, dob?: number, password?: string){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.dob = dob;
    this.email = email;
    this.role = role;
    this.password = password;
    this.userId = userId;

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
  public get role():number {
    return this._role;
  }
  public set role(v: number) {
    this._role = v;
  }
  public get password():string {
    return this._password;
  }
  public set password(v: string) {
    this._password = v;
  }
  public get userId():number {
    return this._userId;
  }
  public set userId(v: number) {
    this._userId = v;
  }
}
