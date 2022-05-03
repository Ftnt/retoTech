import {Router} from 'express';
import {createClient,kpiClient,listClient} from '../controllers/client.controller'

const routes = Router();

routes.post('/creacliente', createClient);
routes.get('/kpideclientes', kpiClient);
routes.get('/listclientes',listClient)

export default routes;