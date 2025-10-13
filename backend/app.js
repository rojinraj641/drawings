import express from 'express';
import connectDB from './src/config/db.js';

const app = express();
app.use(express.json());
await connectDB();

import userRouter from './src/routes/signup.routes.js';
import detailsRouter from './src/routes/details.routes.js'
import newDrawingsRouter from './src/routes/newDrawings.routes.js';

app.use('/api/v1/',userRouter);
app.use('/api/v1/',detailsRouter);
app.use('/api/v1/',newDrawingsRouter);

export default app;