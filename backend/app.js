import express from 'express';
import connectDB from './src/config/db.js';

const app = express();
await connectDB();

import userRouter from './src/routes/signup.routes.js';

app.use('/api/v1/',userRouter);

export default app;