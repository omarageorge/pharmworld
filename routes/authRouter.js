import { Router } from 'express';
import { registerUser } from '../controllers/userController.js';

const router = Router();

router.post('/register', registerUser);

router.post('/login', (req, res) => {
  res.send('Login');
});

router.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

export default router;
