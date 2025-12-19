import { DataCenterModel } from './dataCenterModel'
import { EnergyConsumptionEstimator } from './energyConsumptionEstimator'
import { ElectricityRateProvider } from './electricityRateProvider'

export class CarbonFootprintCalculator {
    private dataCenterModel: DataCenterModel
    private energyConsumptionEstimator: EnergyConsumptionEstimator
    private electricityRateProvider: ElectricityRateProvider

    constructor(dataCenterModel: DataCenterModel, energyConsumptionEstimator: EnergyConsumptionEstimator, electricityRateProvider: ElectricityRateProvider) {
        this.dataCenterModel = dataCenterModel
        this.energyConsumptionEstimator = energyConsumptionEstimator
        this.electricityRateProvider = electricityRateProvider
    }

    async calculateCarbonFootprint(): Promise<number> {
        const energyConsumption = this.energyConsumptionEstimator.calculateEnergyConsumption(this.dataCenterModel)
        const electricityRate = await this.electricityRateProvider.getElectricityRate(this.dataCenterModel.location)
        const carbonIntensity = await this.electricityRateProvider.getCarbonIntensity(this.dataCenterModel.location)

        return energyConsumption * carbonIntensity
    }
}