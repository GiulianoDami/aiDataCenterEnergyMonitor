import axios from 'axios';

interface ElectricityRate {
  location: string;
  rate: number; // in cents per kWh
}

class ElectricityRates {
  private rates: ElectricityRate[] = [];

  constructor() {}

  async fetchRates(location: string): Promise<void> {
    try {
      const response = await axios.get(`https://api.example.com/electricity-rates?location=${location}`);
      const rate = response.data.rate;
      this.rates.push({ location, rate });
    } catch (error) {
      console.error(`Error fetching electricity rates for ${location}:`, error);
    }
  }

  getRate(location: string): number | undefined {
    const rateInfo = this.rates.find(rate => rate.location === location);
    return rateInfo ? rateInfo.rate : undefined;
  }

  clearRates(): void {
    this.rates = [];
  }
}

export default ElectricityRates;