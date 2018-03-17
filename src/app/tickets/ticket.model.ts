export class Ticket {
    public name: string;
    public description: string;
    public priority: string;

    public map(o: any){
        this.name = o.name;
        this.description = o.description;
        this.priority = o.priority;
    }
}