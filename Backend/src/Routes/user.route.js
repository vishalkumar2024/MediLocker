import { Router } from 'express';
const router = Router();
import { login, register, logout } from '../Controller/user.controller.js';
// import { isAuth } from '../Middleware/isAuth.middleware.js';


router.route('/login').post(login)
router.post('/logout',  logout)
router.post('/signup',register);

export default router
