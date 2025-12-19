interface ServerConfig {
    cpuCores: number;
    gpuCount: number;
    memoryGB: number;
    powerDrawWatts: number;
}

interface DataCenterConfig {
    name: string;
    location: string;
    servers: Server[];
    pue?: number;
}

class Server {
    cpuCores: number;
    gpuCount: number;
    memoryGB: number;
    powerDrawWatts: number;
    utilization: number;

    constructor(config: ServerConfig) {
        this.cpuCores = config.cpuCores;
        this.gpuCount = config.gpuCount;
        this.memoryGB = config.memoryGB;
        this.powerDrawWatts = config.powerDrawWatts;
        this.utilization = 0;
    }

    setUtilization(utilization: number): void {
        this.utilization = utilization;
    }

    calculatePowerConsumption(): number {
        return this.powerDrawWatts * (this.utilization / 100);
    }
}

class DataCenter {
    name: string;
    location: string;
    servers: Server[];
    pue: number;

    constructor(config: DataCenterConfig) {
        this.name = config.name;
        this.location = config.location;
        this.servers = config.servers;
        this.pue = config.pue || 1.5;
    }

    setUtilization(utilization: number): void {
        this.servers.forEach(server => server.setUtilization(utilization));
    }

    calculateDailyEnergyConsumption(): number {
        let totalPowerConsumption = 0;
        for (const server of this.servers) {
            totalPowerConsumption += server.calculatePowerConsumption();
        }

        return totalPowerConsumption * 24;
    }

    calculateDailyCost(): number {
        const electricityRate = this.getElectricityRate();
        const dailyEnergyConsumption = this.calculateDailyEnergyConsumption();
        return dailyEnergyConsumption * electricityRate;
    }

    calculateCarbonFootprint(): number {
        const energyConsumption = this.calculateDailyEnergyConsumption();
        const energySource = this.getEnergySource(); // Implement logic to determine energy source
        const carbonEmissionFactor = this.getCarbonEmissionFactor(energySource);

        return energyConsumption * carbonEmissionFactor;
    }

    private getElectricityRate(): number {
        // Stub implementation - replace with API call to ElectricityMaps or similar
        const locationRates: { [key: string]: number } = {
            'Virginia, USA': 0.15,
            'California, USA': 0.25,
            'Texas, USA': 0.12,
        };
        return locationRates[this.location] || 0.20; // Default rate
    }

    private getEnergySource(): string {
        // Placeholder - Implement logic to determine energy source based on location
        return 'mixed'; // e.g., 'renewable', 'coal', 'gas', 'mixed'
    }

    private getCarbonEmissionFactor(energySource: string): number {
        // Placeholder - Define carbon emission factors for different energy sources
        const emissionFactors: { [key: string]: number } = {
            'renewable': 0.0,
            'coal': 0.95,
            'gas': 0.45,
            'mixed': 0.60,
        };
        return emissionFactors[energySource] || 0.60; // Default factor
    }
}

export { DataCenter, Server, ServerConfig, DataCenterConfig };