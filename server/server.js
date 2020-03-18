import express from "express"
import userRouter from './routes/userAuthRoutes'
import partyRoutes from './routes/partyRoutes'
import officeRouter from './routes/officeRoutes'
import parser  from 'body-parser';
import swagg from  '../swagger.json'
import swagger from 'swagger-ui-express';


const app = express()

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


app.use('/politico', swagger.serve, swagger.setup(swagg));
app.use('/api/v1', userRouter)
app.use('/api/v1', partyRoutes)
app.use('/api/v1', officeRouter)
app.get('/', (erq,res) => {
    res.json({
        "message": "welcome home baby"
    })
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('workining on posrt 5432 ......')
})


export default app;
