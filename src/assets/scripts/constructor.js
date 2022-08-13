export default class Task {
  constructor(description, id = 0) {
    this.description = description;
    this.editable = false;
    this.completed = false;
    this.id = id;
  }
}
