export class ApprovalsS {
  studentID: string;
  calendarID: string;
  approved: boolean;

  /**
   *
   */

  constructor(studentID: string, calendarID: string, approved: boolean) {
    this.studentID = studentID;
    this.calendarID = calendarID;
    this.approved = approved;
  }
}
