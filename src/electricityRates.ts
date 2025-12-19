import axios from 'axios';

interface ElectricityRate {
    location: string;
    rate: number; // in cents per kWh
}

class ElectricityRates {
    private rates: ElectricityRate[] = [];

    constructor() {}

    public async fetchRates(location: string): Promise<void> {
        try {
            const response = await axios.get(`https://api.example.com/electricity-rates?location=${location}`);
            this.rates.push({ location, rate: response.data.rate });
        } catch (error) {
            console.error(`Error fetching electricity rates for ${location}:`, error);
        }
    }

    public getRate(location: string): number | undefined {
        const rateInfo = this.rates.find(rate => rate.location === location);
        return rateInfo ? rateInfo.rate : undefined;
    }

    public getAllRates(): ElectricityRate[] {
        return this.rates;
    }
}

export default ElectricityRates;