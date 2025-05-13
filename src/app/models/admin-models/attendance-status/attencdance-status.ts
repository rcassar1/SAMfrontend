export class AttencdanceStatus {
  id: string;
  attendanceStatus: string;

  /**
   *
   */
  constructor(id: string, attendanceStatus: string) {
    this.id = id;
    this.attendanceStatus = attendanceStatus;
  }
}
