import {Router} from 'express';
import { listarColores,agregarColor,modificarColor,borrarColor } from '../controllers/codigoColores.controllers';

const router = Router();

router.route('/codigoColores')
    .get(listarColores)
    .post(agregarColor);

router.route('/codigoColores/:codigo')
    .put(modificarColor)
    .delete(borrarColor);

export default router;