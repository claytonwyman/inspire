export default class Todo {
    constructor(data) {
        console.log('[RAW TODO API DATA]', data); 

        this.user = data.data[0].user;
        this.id = data.data[0]._id;
        this.completed = data.data[0].completed;
        this.desc = data.data[0].description;

        console.log('FIXED TODO API DATA:', this.user, this.id, this.completed, this.desc)
    }
}