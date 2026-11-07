import { type Request, type Response } from 'express'
import * as models from '../models/index'

// ARCHIVO DE DEMOSTRACION: version corregida, usa consulta parametrizada
export function demoVuln () {
  return (req: Request, res: Response) => {
    const nombre = req.query.nombre
    models.sequelize.query('SELECT * FROM Users WHERE username = :nombre', { replacements: { nombre: String(nombre) } })
      .then(([resultado]: any) => {
        res.json(resultado)
      })
  }
}
