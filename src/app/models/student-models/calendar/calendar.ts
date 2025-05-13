export class Calendar {
  _id!: string;
  date: Date;
  classID: string;
  title: string;
  calendar: string;
  approved: boolean;

  /**
   *
   */

  constructor(
    _id: string,
    date: Date,
    classID: string,
    title: string,
    calendar: string,
    approved: boolean
  ) {
    this._id = _id;
    this.date = date;
    this.classID = classID;
    this.title = title;
    this.calendar = calendar;
    this.approved = approved;
  }
}
