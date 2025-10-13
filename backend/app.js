import express from 'express';
import connectDB from './src/config/db.js';

const app = express();
await connectDB();

import userRouter from './src/routes/signup.routes.js';
import detailsRouter from './src/routes/details.routes.js'

app.use('/api/v1/',userRouter);
app.use('/api/v1/',detailsRouter);

export default app;