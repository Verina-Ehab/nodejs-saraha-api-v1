// (Main application file)

import express from 'express';
import bootstrap from './src/app.controller.js';
// import authRoutes from './routes/authRoutes.js'
const app = express();
const PORT = 3000;

bootstrap(app, express)
// app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server started (app.js) at http://localhost:${PORT}`);
});