import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'
import { DataCenterModel } from './models/dataCenterModel'
import { EnergyConsumptionCalculator } from './services/energyConsumptionCalculator'
import { CostAnalyzer } from './services/costAnalyzer'
import { CarbonFootprintCalculator } from './services/carbonFootprintCalculator'

const app: Express = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/calculate-energy', (req: Request, res: Response) => {
    const dataCenter: DataCenterModel = req.body
    const calculator = new EnergyConsumptionCalculator(dataCenter)
    const energyUsage = calculator.calculateEnergyUsage()
    res.json({ energyUsage })
})

app.post('/analyze-cost', (req: Request, res: Response) => {
    const dataCenter: DataCenterModel = req.body
    const costAnalyzer = new CostAnalyzer(dataCenter)
    const cost = costAnalyzer.projectCost()
    res.json({ cost })
})

app.post('/calculate-carbon-footprint', (req: Request, res: Response) => {
    const dataCenter: DataCenterModel = req.body
    const carbonCalculator = new CarbonFootprintCalculator(dataCenter)
    const carbonFootprint = carbonCalculator.calculateCarbonFootprint()
    res.json({ carbonFootprint })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})