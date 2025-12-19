export class Server {
    cpuCores: number;
    gpuCount: number;
    memoryGB: number;
    powerDrawWatts: number;

    constructor({ cpuCores, gpuCount, memoryGB, powerDrawWatts }: { cpuCores: number, gpuCount: number, memoryGB: number, powerDrawWatts: number }) {
        this.cpuCores = cpuCores;
        this.gpuCount = gpuCount;
        this.memoryGB = memoryGB;
        this.powerDrawWatts = powerDrawWatts;
    }
}

export class DataCenter {
    name: string;
    location: string;
    servers: Server[];
    utilization: number;
    pue: number;

    constructor({ name, location, servers, pue = 1.5 }: { name: string, location: string, servers: Server[], pue?: number }) {
        this.name = name;
        this.location = location;
        this.servers = servers;
        this.utilization = 50; // Default utilization
        this.pue = pue;
    }

    setUtilization(utilization: number): void {
        this.utilization = utilization;
    }

    calculateDailyEnergyConsumption(): number {
        let totalPowerDraw = 0;
        for (const server of this.servers) {
            totalPowerDraw += server.powerDrawWatts * (this.utilization / 100);
        }

        const totalDailyEnergy = totalPowerDraw * 24;
        return totalDailyEnergy * this.pue / 1000; // kWh
    }

    calculateDailyCost(): number {
        // Stub electricity rate data - replace with API integration
        const electricityRates: { [location: string]: number } = {
            'Virginia, USA': 0.15, // $ per kWh
            'California, USA': 0.20,
            'Texas, USA': 0.12,
            'Europe, Germany': 0.30,
            'Asia, Japan': 0.25
        };

        const rate = electricityRates[this.location] || 0.15; // Default rate
        const dailyEnergyConsumption = this.calculateDailyEnergyConsumption();
        return dailyEnergyConsumption * rate;
    }

    calculateCarbonFootprint(): number {
        // Stub carbon emission factors - replace with more accurate data
        const carbonEmissionFactors: { [energySource: string]: number } = {
            'coal': 0.934, // kg CO2e per kWh
            'gas': 0.487,
            'renewable': 0.0,
        };

        const energySource = 'gas'; // Default energy source
        const dailyEnergyConsumption = this.calculateDailyEnergyConsumption();
        return dailyEnergyConsumption * carbonEmissionFactors[energySource];
    }
}