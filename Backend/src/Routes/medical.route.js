import {Router} from 'express'
const router = Router()
import {medication} from '../Controller/medication.controller.js'

router.post("/medication", medication);

export default router