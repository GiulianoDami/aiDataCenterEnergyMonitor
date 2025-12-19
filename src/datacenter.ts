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
        const totalServerEnergy = this.servers.reduce((sum, server) => sum + server.calculateEnergyConsumption(hours), 0);
        return totalServerEnergy * this.pue;
    }

    public calculateCost(hours: number): number {
        const totalEnergyConsumption = this.calculateTotalEnergyConsumption(hours);
        const costCalculator = new EnergyCostCalculator(this.location);
        return costCalculator.calculateCost(totalEnergyConsumption);
    }

    public calculateCarbonFootprint(hours: number): number {
        const totalEnergyConsumption = this.calculateTotalEnergyConsumption(hours);
        const carbonCalculator = new CarbonFootprintCalculator(this.location);
        return carbonCalculator.calculateFootprint(totalEnergyConsumption);
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

    public getPUE(): number {
        return this.pue;
    }

    public getLocation(): string {
        return this.location;
    }

    public setPUE(pue: number): void {
        this.pue = pue;
    }

    public setLocation(location: string): void {
        this.location = location;
    }
}