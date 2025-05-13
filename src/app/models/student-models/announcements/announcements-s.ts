export class AnnouncementsS {
  _id!: string;
  date: Date;
  classID: string;
  title: string;
  announcement: string;

  /**
   *
   */

  constructor(
    _id: string,
    date: Date,
    classID: string,
    title: string,
    announcement: string
  ) {
    this._id = _id;
    this.date = date;
    this.classID = classID;
    this.title = title;
    this.announcement = announcement;
  }
}
