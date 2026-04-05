import express from 'express';
import { verificar_token } from '../middlewares/auth_middleware.js';
const router = express.Router();

router.get('/login', (req,res)=>res.render('login'));
router.get('/register', (req,res)=>res.render('register'));
router.get('/dashboard', verificar_token, (req,res)=>res.render('dashboard'));
router.get('/dashboard-view', (req, res) => {
  res.json({
    ventas_mensuales: [1200, 1900, 3000, 2500, 3200, 4100],

    platos_populares: {
      labels: ['Pizza', 'Burger', 'Pasta', 'Sushi', 'Tacos'],
      data: [120, 90, 70, 50, 80]
    },

    ventas_por_categoria: {
      labels: ['Comida', 'Bebidas', 'Postres'],
      data: [5000, 2000, 1500]
    },

    clientes_por_dia: [30, 45, 60, 50, 70, 90, 120],

    marketing: {
      labels: ['Instagram', 'Google Ads', 'Facebook'],
      data: [300, 500, 200]
    },

    tasa_conversion: [2, 3, 5, 4, 6, 7],

    pedidos_online_vs_local: [60, 40],

    horas_pico: {
      labels: ['12pm', '2pm', '6pm', '9pm'],
      data: [50, 80, 120, 90]
    }

  });
});
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});

export default router;