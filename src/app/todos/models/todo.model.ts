export class Todo {
    public id: number;
    public text: string;
    public completed: boolean;

    constructor(text: string) {
        this.text = text;
        
        this.id = Number((Math.random() * 100).toFixed(0));
        this.completed = false;
    }
}