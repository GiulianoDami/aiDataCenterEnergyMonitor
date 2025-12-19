// src/datacenter.ts
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

    constructor(options: { name: string; location: string; servers: Server[]; pue?: number }) {
        this.name = options.name;
        this.location = options.location;
        this.servers = options.servers;
        this.utilization = 50; // Default utilization
        this.pue = options.pue || 1.5; // Default PUE
    }

    setUtilization(utilization: number) {
        this.utilization = utilization;
    }

    calculateDailyEnergyConsumption(): number {
        let totalPowerDraw = 0;
        for (const server of this.servers) {
            totalPowerDraw += server.powerDrawWatts;
        }

        const dailyEnergyConsumption = (totalPowerDraw * this.utilization / 100) * 24 / 1000; // kWh
        return dailyEnergyConsumption * this.pue;
    }

    calculateDailyCost(): number {
        // Stub electricity rate data (replace with API integration)
        const electricityRates: { [location: string]: number } = {
            'Virginia, USA': 0.15, // Example rate in $/kWh
            'California, USA': 0.25,
            'Texas, USA': 0.12,
            'Europe, Germany': 0.30
        };

        const rate = electricityRates[this.location] || 0.20; // Default rate
        const dailyEnergyConsumption = this.calculateDailyEnergyConsumption();
        return dailyEnergyConsumption * rate;
    }

    calculateCarbonFootprint(): number {
        // Stub carbon emission factors (replace with more accurate data)
        const carbonEmissionFactors: { [source: string]: number } = {
            'coal': 0.9, // kg CO2e/kWh
            'gas': 0.4,
            'renewable': 0.1
        };

        const energySource = 'gas'; // Example energy source
        const emissionFactor = carbonEmissionFactors[energySource] || 0.5; // Default factor
        const dailyEnergyConsumption = this.calculateDailyEnergyConsumption();
        return dailyEnergyConsumption * emissionFactor;
    }
}