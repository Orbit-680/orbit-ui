export class CheckRole {
    public hasRole: boolean;
    public currentRoleName: string;

    public map(o: any) {
        this.hasRole = o.hasRole;
        this.currentRoleName = o.currentRoleName;
    }
}
