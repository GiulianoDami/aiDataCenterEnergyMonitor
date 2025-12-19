import { DataCenterModel } from './dataCenterModel'
import { EnergyConsumptionEstimator } from './energyConsumptionEstimator'
import { ElectricityRateProvider } from './electricityRateProvider'

interface CarbonIntensityData {
    [region: string]: number // Carbon intensity in kgCO2/kWh
}

class CarbonFootprintCalculator {
    private carbonIntensityData: CarbonIntensityData

    constructor(carbonIntensityData: CarbonIntensityData) {
        this.carbonIntensityData = carbonIntensityData
    }

    async calculateCarbonFootprint(dataCenter: DataCenterModel, utilizationRate: number, pue: number): Promise<number> {
        const energyConsumptionEstimator = new EnergyConsumptionEstimator()
        const electricityRateProvider = new ElectricityRateProvider()

        const energyUsage = energyConsumptionEstimator.estimateEnergyUsage(dataCenter, utilizationRate, pue)
        const electricityRate = await electricityRateProvider.getElectricityRate(dataCenter.location)

        const carbonIntensity = this.carbonIntensityData[dataCenter.location] || 0.5 // Default to 0.5 kgCO2/kWh if not found
        return energyUsage * carbonIntensity
    }
}

export { CarbonFootprintCalculator }