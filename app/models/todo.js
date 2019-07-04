export default class Todo {
    constructor(data) {
        this.user = data.user;
        this.id = data._id;
        this.completion = data.completed;
        this.desc = data.description;
    }
}