import {Router} from 'express';
import { listarColores,agregarColor,modificarColor,borrarColor } from '../controllers/codigoColores.controllers';
import { validacionColor } from '../helpers/validacionColor';


const router = Router();

router.route('/codigoColores')
    .get(listarColores)
    .post(validacionColor,agregarColor);

router.route('/codigoColores/:codigo')
    .put(validacionColor,modificarColor)
    .delete(borrarColor);

export default router;