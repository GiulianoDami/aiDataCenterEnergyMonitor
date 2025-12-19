export interface ServerConfig {
    cpu: string;
    gpu: string;
    memory: number; // in GB
    utilizationRate: number; // percentage
}

export interface DataCenter {
    name: string;
    location: string;
    servers: ServerConfig[];
    pue: number; // Power Usage Effectiveness
}

export interface EnergyConsumptionReport {
    totalEnergyConsumed: number; // in kWh
    cost: number; // in currency unit
    carbonFootprint: number; // in kg CO2
}

export interface ElectricityRate {
    location: string;
    ratePerKWh: number; // in currency unit per kWh
}

export interface CarbonEmissionFactor {
    location: string;
    factor: number; // in kg CO2 per kWh
}