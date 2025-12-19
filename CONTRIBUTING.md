// src/datacenter.ts
export class Server {
    cpuCores: number;
    gpuCount: number;
    memoryGB: number;
    powerDrawWatts: number;

    constructor({ cpuCores, gpuCount, memoryGB, powerDrawWatts }: { cpuCores: number; gpuCount: number; memoryGB: number; powerDrawWatts: number }) {
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

    constructor({ name, location, servers, pue = 1.5 }: { name: string; location: string; servers: Server[]; pue?: number }) {
        this.name = name;
        this.location = location;
        this.servers = servers;
        this.utilization = 50; // Default utilization
        this.pue = pue;
    }

    setUtilization(utilization: number) {
        this.utilization = utilization;
    }

    calculateDailyEnergyConsumption(): number {
        let totalPowerDraw = 0;
        for (const server of this.servers) {
            totalPowerDraw += server.powerDrawWatts;
        }

        const energyConsumptionWatts = totalPowerDraw * (this.utilization / 100) * 24;
        const energyConsumptionKwh = energyConsumptionWatts / 1000;

        return energyConsumptionKwh * this.pue;
    }

    calculateDailyCost(): number {
        // Stub data for electricity rates (replace with API integration)
        const electricityRates: { [location: string]: number } = {
            'Virginia, USA': 0.15, // USD per kWh
            'California, USA': 0.25,
            'Texas, USA': 0.12,
            'Europe, Germany': 0.30, //EUR per kWh
        };

        const rate = electricityRates[this.location] || 0.20; // Default rate

        const dailyEnergyConsumption = this.calculateDailyEnergyConsumption();
        return dailyEnergyConsumption * rate;
    }

    calculateCarbonFootprint(): number {
        // Stub data for carbon emission factors (replace with more accurate data)
        const emissionFactors: { [energySource: string]: number } = {
            coal: 0.9, // kg CO2e per kWh
            gas: 0.4,
            renewable: 0.1,
        };

        // Assume a mix of energy sources (replace with actual data)
        const energySourceMix = { coal: 0.3, gas: 0.4, renewable: 0.3 };

        let totalEmissions = 0;
        const dailyEnergyConsumption = this.calculateDailyEnergyConsumption();

        for (const [source, percentage] of Object.entries(energySourceMix)) {
            totalEmissions += dailyEnergyConsumption * percentage * emissionFactors[source as keyof typeof emissionFactors];
        }

        return totalEmissions;
    }
}