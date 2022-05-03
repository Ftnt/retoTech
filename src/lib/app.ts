import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import clientRoutes from '../routes/client.routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(clientRoutes)

export default app