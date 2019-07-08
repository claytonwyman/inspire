export default class Todo {
    constructor(data) {
        console.log('[RAW TODO API DATA]', data); 

        this.user = data.user;
        this.id = data._id;
        this.completion = data.completed;
        this.desc = data.description;
    }
}