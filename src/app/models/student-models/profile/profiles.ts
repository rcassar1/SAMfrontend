export class Profiles {
  _id!: string;
  studentEmail: string;

  /**
   *
   */

  constructor(_id: string, studentEmail: string) {
    this._id = _id;
    this.studentEmail = studentEmail;
  }
}
