export class Todo {
    
    public id: number;
    public completed: boolean

    constructor(
        public text: string,
    ){
        this.id = Math.random()
        this.completed = false
    }
}
