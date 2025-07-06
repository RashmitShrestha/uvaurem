// a task consists of the following elements
// 1. unique ID (from the timestamp that task was created plus combo of its title and importance )
// 2. task title 
// 3. importance level (can either be set by user or chosen through eisenhower matrix)
// 4. task status (0 = unstarted, 1 = in progress, 2 = finished)
export class taskClass {
  constructor(title, importance, status = 0, description = "") {
    this.title = title; // max 40 characters
    this.importance = importance; // 0 = low, 1 = medium, 2 = high
    this.id =  Date.now() + `${title.length}${importance}`;
    this.status = 0; // 0 = unstarted, 1 = in progress, 2 = finished
    this.description = ""; // optional, can be set later
  }

  toString() {
    return `Task: ${this.title}, Importance: ${this.importance}, ID: ${this.id}`,`Status: ${this.status}, Description: ${this.description}`;
  }

toJSON() {
  return {
    title: this.title,
    importance: this.importance,
    id: this.id,
    status: this.status,
    description: this.description
  };
}


  toJSONString() {
    return JSON.stringify(this.toJSON());
  }

}