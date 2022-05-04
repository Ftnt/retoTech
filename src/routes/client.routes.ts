import {Router} from 'express';
import {createClient,kpiClient,listClient} from '../controllers/client.controller'

const routes = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Client:
 *      type: object
 *      properties:
 *        id:
 *         type: number
 *         description: Id del cliente
 *        name:
 *          type: string
 *          description: Nombre del cliente
 *        lastname:
 *          type: string
 *          description: Apellido del cliente
 *        age:
 *          type: number
 *          description: Edad del cliente
 *        dateBirth:
 *          type: date
 *          description: Fecha de nacimiento del cliente
 *        active:
 *          type: boolean
 *          description: Estado del cliente
 *        createdAt:
 *          type: date
 *          description: Fecha de creacion del cliente
 *        updatedAt:
 *          type: date
 *          description: Fecha de actualizacion del cliente
 *      example:
 *          id: 9
 *          name: Alonso
 *          lastname: Perez
 *          age: 25
 *          dateBirth: "1997-01-01"
 *          active: true
 *          createdAt: "2020-05-06T17:00:00.000Z"
 *          updatedAt: "2020-05-06T17:00:00.000Z"
 *    AddClient:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Nombre del cliente
 *        lastname:
 *          type: string
 *          description: Apellido del cliente
 *        age:
 *          type: number
 *          description: Edad del cliente
 *        dateBirth:
 *          type: date
 *          description: Fecha de nacimiento del cliente
 *      required:
 *       - name
 *       - lastname
 *       - age
 *       - dateBirth
 *      example:
 *        name: Alonso
 *        lastname: Perez
 *        age: 25
 *        dateBirth: "1997-01-01"
 *    ResponseAddClient:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *        data:
 *          $ref: '#/components/schemas/Client'
 *    AllClients:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *        data:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Client'
 *          dateDeath:
 *            type: date
 *            description: Fecha de muerte del cliente
 *      example:
 *        status:
 *          success
 *        data:
 *         - id: 9
 *           name: Alonso
 *           lastname: Perez
 *           age: 25
 *           dateBirth: "1997-01-01"
 *           active: true
 *           createdAt: "2020-05-06T17:00:00.000Z"
 *           updatedAt: "2020-05-06T17:00:00.000Z"
 *           dateDeath: "2050-05-06T17:00:00.000Z"
 */

/**
 * @swagger
 * tags:
 *  name: Clients
 *  description: Client endpoint
 * /

/**
  * @swagger
  * /creacliente:
  *  post:
  *     summary: Crea un nuevo cliente
  *     tags: [Clients]
  *     requestBody:
  *      description: Objeto de cliente que debe agregarse
  *      required: true
  *      content:
  *       application/json:
  *         schema:
  *          $ref: '#/components/schemas/AddClient'
  *     responses:
  *       '201':
  *         description: A successful response
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/ResponseAddClient'
  *       '500':
  *           description: Some server error
  *           content:
  *             application/json:
  *              schema:
  *               type: object
  *               example:
  *                message:
  *                 Error creating client
  *                error:
  *                 ER_NO_DEFAULT_FOR_FIELD: Field 'name' doesn't have a default value
  *
*/
routes.post('/creacliente', createClient);

/**
  * @swagger
  * /kpideclientes:
  *   get:
  *     description: ''
  *     summary: Obtiene promedio y desviacion estandar de la edad de los clientes
  *     tags: [Clients]
  *     responses:
  *       '200':
  *         description: A successful response
  *         content:
  *           application/json:
  *             schema:
  *               type: object
  *               properties:
  *                 status:
  *                   type: string
  *                   description: Estado de la peticion
  *                 data:
  *                   type: object
  *                   properties:
  *                     promedioEdad:
  *                       type: number
  *                       description: Promedio de edad de los clientes
  *                     desviacionEstandar:
  *                       type: number
  *                       description: Desviacion estandar de la edad de los clientes
  *               example:
  *                status:
  *                 success
  *                data:
  *                 promedioEdad: 25.45
  *                 desviacionEstandar: 17.66
*/
routes.get('/kpideclientes', kpiClient);

/**
  * @swagger
  * /listclientes:
  *   get:
  *     summary: Lista de personas con todos los datos + fecha probable de muerte de cada una
  *     tags: [Clients]
  *     responses:
  *       '200':
  *         description: A successful response
  *         content:
  *           application/json:
  *             schema:
  *              $ref: '#/components/schemas/AllClients'
*/
routes.get('/listclientes',listClient)

export default routes;