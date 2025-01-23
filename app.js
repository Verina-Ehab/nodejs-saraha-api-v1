// (Main application file)
import * as dotenv from 'dotenv'
dotenv.config({});
import express from 'express';
import bootstrap from './src/app.controller.js';
import cors from 'cors';
// import authRoutes from './routes/authRoutes.js'
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8888;

bootstrap(app, express)
// app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server started (app.js) at ${process.env.BASE_URL}`);
});