export class Diary {
  date: Date;
  classID: string;
  diary: string;

  /**
   *
   */

  constructor(date: Date, classID: string, diary: string) {
    this.date = date;
    this.classID = classID;
    this.diary = diary;
  }
}
