export class Attendance {
  studentID: string;
  date: Date;
  attendanceStatusID: string;

  /**
   *
   */
  constructor(studentID: string, date: Date, attendanceStatusID: string) {
    this.studentID = studentID;
    this.date = date;
    this.attendanceStatusID = attendanceStatusID;
  }
}
