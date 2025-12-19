import express, { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { calculateEnergyConsumption, calculateCost, calculateCarbonFootprint } from './energyCalculator'
import { DataCenterModel } from './dataCenterModel'

const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.post('/estimate-energy', (req, res) => {
    const dataCenter: DataCenterModel = req.body
    try {
        const energyConsumption = calculateEnergyConsumption(dataCenter)
        res.json({ energyConsumption })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.post('/estimate-cost', (req, res) => {
    const dataCenter: DataCenterModel = req.body
    const location = req.query.location as string
    try {
        const cost = calculateCost(dataCenter, location)
        res.json({ cost })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.post('/estimate-carbon-footprint', (req, res) => {
    const dataCenter: DataCenterModel = req.body
    const location = req.query.location as string
    try {
        const carbonFootprint = calculateCarbonFootprint(dataCenter, location)
        res.json({ carbonFootprint })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})