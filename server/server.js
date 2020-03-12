import express from "express"
import userRouter from './routes/userAuthRoutes'
import partyRoutes from './routes/partyRoutes'
import officeRouter from './routes/officeRoutes'
import parser  from 'body-parser'

const app = express()

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());



app.use('/api/v1', userRouter)
app.use('/api/v1', partyRoutes)
app.use('/api/v1', officeRouter)


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening to port ${port} ......`))

