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

export interface EnergyConsumption {
    totalEnergy: number; // in kWh
    cost: number; // in currency unit
    carbonFootprint: number; // in kg CO2
}

export interface ElectricityRates {
    [location: string]: number; // rate per kWh in currency unit
}

export interface EnergySource {
    [location: string]: string; // type of energy source (e.g., 'coal', 'nuclear', 'renewable')
}

export interface CarbonEmissionFactors {
    [energySource: string]: number; // emission factor in kg CO2/kWh
}