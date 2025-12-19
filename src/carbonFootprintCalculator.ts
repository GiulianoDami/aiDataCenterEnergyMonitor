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
            totalPowerDraw += server.powerDrawWatts * (this.utilization / 100);
        }

        const totalDailyEnergyConsumption = totalPowerDraw * 24;
        const totalPueEnergyConsumption = totalDailyEnergyConsumption * this.pue;
        return totalPueEnergyConsumption / 1000; // kWh
    }

    calculateDailyCost(): number {
        // Stub electricity rate data
        const electricityRates: { [location: string]: number } = {
            'Virginia, USA': 0.15, // $ per kWh
            'California, USA': 0.20,
            'Texas, USA': 0.12,
            'Europe, UK': 0.25,
            // Add more locations and rates as needed
        };

        const rate = electricityRates[this.location] || 0.15; // Default rate
        const dailyEnergyConsumption = this.calculateDailyEnergyConsumption();
        return dailyEnergyConsumption * rate;
    }

    calculateCarbonFootprint(): number {
        // Simplified carbon footprint calculation based on energy source
        // In a real-world scenario, this would be more complex and consider
        // the specific energy mix of the location.

        const energyConsumption = this.calculateDailyEnergyConsumption();

        // Assume a default carbon emission factor of 0.5 kg CO2e per kWh
        // This factor varies based on the energy source (coal, gas, renewable)
        const carbonEmissionFactor = 0.5;

        return energyConsumption * carbonEmissionFactor;
    }
}