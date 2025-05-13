export class EducatorRole {
  id: string;
  role: string;
  isEdit: boolean;

  /**
   *
   */
  constructor(id: string, role: string) {
    this.id = id;
    this.role = role;
    this.isEdit = false;
  }
}
