export class Ticket {
    public ticketID: number;
    public name: string;
    public description: string;
    public priority: string;

    public map(o: any) {
        this.ticketID = o.ticketID;
        this.name = o.name;
        this.description = o.description;
        this.priority = o.priority;
    }
}
