 import {Options, SwaggerDefinition } from 'swagger-jsdoc';

 const swaggerDefinition: SwaggerDefinition = {

    openapi: '3.0.0',
    info: {
        version: '1.0.0', //Semantic Version
        title: 'API de profesores usando Typescript para la universidad UPB',
        description: 'Con esta API se puede enlistar los profesores de la universidad'

    },
    servers: [
        {
            url: 'http://localhost:3000/api'
        }
    ]
 };


 const swaggerOptions: Options = {

    swaggerDefinition,
    apis: [
        './src/app/routes/*.ts',
        './src/app/controllers/*.ts',
        './src/domain/entities/*.ts'
    ]

 }

 export default swaggerOptions;