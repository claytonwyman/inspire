export default class Todo {
    constructor(data) {
        console.log('[RAW TODO API DATA]', data); 

        this.user = data.data.user;
        this.id = data.data._id;
        this.completed = data.data.completed;
        this.desc = data.data.description;
    }
}