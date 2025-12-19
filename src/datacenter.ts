import { Server } from './server';
import { EnergyCostCalculator } from './energyCostCalculator';
import { CarbonFootprintCalculator } from './carbonFootprintCalculator';

export class DataCenter {
    private servers: Server[];
    private pue: number;
    private location: string;

    constructor(servers: Server[], pue: number, location: string) {
        this.servers = servers;
        this.pue = pue;
        this.location = location;
    }

    public calculateTotalEnergyConsumption(hours: number): number {
        const totalServerPower = this.servers.reduce((sum, server) => sum + server.getPowerUsage(), 0);
        return totalServerPower * this.pue * hours;
    }

    public calculateCost(hours: number): number {
        const energyConsumption = this.calculateTotalEnergyConsumption(hours);
        const costCalculator = new EnergyCostCalculator(this.location);
        return costCalculator.calculateCost(energyConsumption);
    }

    public calculateCarbonFootprint(hours: number): number {
        const energyConsumption = this.calculateTotalEnergyConsumption(hours);
        const carbonCalculator = new CarbonFootprintCalculator(this.location);
        return carbonCalculator.calculateFootprint(energyConsumption);
    }

    public addServer(server: Server): void {
        this.servers.push(server);
    }

    public removeServer(serverId: string): void {
        this.servers = this.servers.filter(server => server.id !== serverId);
    }

    public getServers(): Server[] {
        return this.servers;
    }

    public setPue(newPue: number): void {
        this.pue = newPue;
    }

    public getPue(): number {
        return this.pue;
    }

    public setLocation(newLocation: string): void {
        this.location = newLocation;
    }

    public getLocation(): string {
        return this.location;
    }
}