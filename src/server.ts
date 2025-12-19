import express, { Express } from 'express'
import cors from 'cors'
import { energyRouter } from './routes/energy'
import { costRouter } from './routes/cost'
import { carbonRouter } from './routes/carbon'

const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/energy', energyRouter)
app.use('/cost', costRouter)
app.use('/carbon', carbonRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the AI Data Center Energy Monitor API')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})