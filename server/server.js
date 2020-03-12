import express from "express"
import router from './routes/userAuthRoutes'
import parser  from 'body-parser'

const app = express()

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());



app.use('/api/v1', router)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`listening to port ${port} ......`))

