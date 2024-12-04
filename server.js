//PACKAGE IMPORTS
import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
//FILE IMPORTS
import connectDB from './config/db.js';
//ROUTE IMPORTS
import testRoutes from './routes/testRoutes.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import jobsRoutes from './routes/jobsRoute.js';

//dotenv config: only then we will be able to use the environment varioable
dotenv.config();

//mongodb connection
connectDB()

//REST OBJECT: the rest object uses http methods to perform CRUD operations 
const app= express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//ROUTING
app.use("/api/v1/test",testRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/job",jobsRoutes);

//validation middleware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT||8080;

//LISTEN
app.listen(PORT, ()=>{
    console.log(`node server running in ${process.env.DEV_MODE} mode on port ${PORT}`);
});