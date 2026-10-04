import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './app/routes/user.routes.js';

dotenv.config();

const app = express();

app.use('/api', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is run on this port no ${port}`);
});
