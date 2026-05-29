import {Router} from 'express'
const router = Router()
import {medication} from '../Controller/medication.controller.js'
import { appointment } from '../Controller/appointment.controller.js';


router.post("/medication", medication);
router.post('/appointment', appointment);

export default router