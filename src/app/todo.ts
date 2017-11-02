export class Todo {
    id: number;
    name: string = '';
    college: string;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
  