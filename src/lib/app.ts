import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import clientRoutes from '../routes/client.routes';
import {option} from './swaggerOptions';

//swagger
import swaggerIU from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const specs = swaggerJsDoc(option)

app.use(clientRoutes)
app.use('/docs', swaggerIU.serve, swaggerIU.setup(specs))

export default app