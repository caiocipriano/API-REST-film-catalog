import express, { NextFunction,Request, Response }  from 'express'
const { celebrate, Joi, errors, Segments } = require('celebrate');


import { router } from './routes'
import { AppError } from './error/appError';

const app = express()
const port = process.env.PORT ||8080
app.use(express.json())
app.use(router)
app.use(errors())

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    },
  );

//Rodando Servidor
app.listen(port,()=>{
    console.log("Rodando na porta 8080...")
})

export {app}