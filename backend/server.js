import express from 'express';
import studentRoute from './routes/studentRoute.js'
import conncetDB from './config/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import companyRoute from './routes/companyRoute.js'
const app=express(); //instance of express()

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true
    })
)

app.use(express.json()) // parses data coming from frontend
dotenv.config();
conncetDB();

const PORT=process.env.PORT;

app.use('/student',studentRoute)
app.use('/company',companyRoute)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
