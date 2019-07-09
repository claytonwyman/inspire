export default class Todo {
    constructor(data) {
        console.log('[RAW TODO API DATA]', data); 

        this.user = data.user;
        this.id = data._id;
        this.completed = data.completed;
        this.desc = data.description;

        console.log('FIXED TODO API DATA:', this.user, this.id, this.completed, this.desc)
    }

    get Template() {
        return `
    	    <li>${this.desc} - ${this.completed}</li>
        `
    }
}