export interface ServerConfig {
    cpu: string;
    gpu: string;
    memory: number; // in GB
}

export interface DataCenterModel {
    name: string;
    servers: ServerConfig[];
    utilizationRate: number; // between 0 and 1
    pue: number; // Power Usage Effectiveness
}

export interface EnergyConsumption {
    totalKWh: number;
    cost: number;
    carbonFootprint: number; // in kg CO2
}

export interface ElectricityRate {
    location: string;
    ratePerKWh: number; // in currency per kWh
}

export interface CarbonEmissionFactor {
    location: string;
    factor: number; // in kg CO2 per kWh
}