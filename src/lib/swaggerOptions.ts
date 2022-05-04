export const option ={
  definition :{
    openapi: '3.0.0',
    info: {
      title: 'Client',
      version: '1.0.0',
      description: 'API with express and TypeOrm (Mysql) - Client API'
    },
    servers: [
      {
        url: 'http://localhost:3001'
      }
    ]
  },
  apis: ['./src/routes/*.routes.ts']
}