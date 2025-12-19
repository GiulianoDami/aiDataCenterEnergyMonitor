export class Server {
    cpuCores: number;
    gpuCount: number;
    memoryGB: number;
    powerDrawWatts: number;

    constructor(options: { cpuCores: number; gpuCount: number; memoryGB: number; powerDrawWatts: number }) {
        this.cpuCores = options.cpuCores;
        this.gpuCount = options.gpuCount;
        this.memoryGB = options.memoryGB;
        this.powerDrawWatts = options.powerDrawWatts;
    }
}

export class DataCenter {
    name: string;
    location: string;
    servers: Server[];
    utilization: number;
    pue: number;
    electricityRate: number; // $/kWh
    carbonEmissionFactor: number; // kg CO2e / kWh

    constructor(options: { name: string; location: string; servers: Server[]; pue?: number; electricityRate?: number; carbonEmissionFactor?: number }) {
        this.name = options.name;
        this.location = options.location;
        this.servers = options.servers;
        this.utilization = 50; // Default utilization
        this.pue = options.pue || 1.5;
        this.electricityRate = options.electricityRate || 0.15; //default rate
        this.carbonEmissionFactor = options.carbonEmissionFactor || 0.4;
    }

    setUtilization(utilization: number) {
        this.utilization = utilization;
    }

    calculateDailyEnergyConsumption(): number {
        let totalPowerDraw = 0;
        for (const server of this.servers) {
            totalPowerDraw += server.powerDrawWatts;
        }

        const dailyEnergyConsumption = (totalPowerDraw * this.utilization / 100 * 24) / 1000; // kWh
        return dailyEnergyConsumption * this.pue;
    }

    calculateDailyCost(): number {
        const energyConsumption = this.calculateDailyEnergyConsumption();
        return energyConsumption * this.electricityRate;
    }

    calculateCarbonFootprint(): number {
        const energyConsumption = this.calculateDailyEnergyConsumption();
        return energyConsumption * this.carbonEmissionFactor;
    }
}