import { type Request, type Response } from 'express'
import * as models from '../models/index'

// ARCHIVO DE DEMOSTRACION: contiene una vulnerabilidad intencional para el laboratorio SAST
export function demoVuln () {
  return (req: Request, res: Response) => {
    const nombre = req.query.nombre
    models.sequelize.query(`SELECT * FROM Users WHERE username = '${nombre}'`)
      .then(([resultado]: any) => {
        res.json(resultado)
      })
  }
}
