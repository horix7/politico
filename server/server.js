import express from "express"
import router from './routes/userAuthRoutes'
const app = express()


app.use(express.json());

app.use('/api/v1', router)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening to port ${port} ......`))

