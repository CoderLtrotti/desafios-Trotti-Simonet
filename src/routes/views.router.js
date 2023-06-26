import { Router } from "express";
import { isAuth, isGuest , isAdmin, isUser } from '../middleware/auth.middleware.js';


const ROLES = {
    ADMIN: 'admin',
    USER: 'user',
  };

  
const viewsRouter = Router();

viewsRouter.get('/cookies', (req, res) =>{
    res.render('cookies');
});

viewsRouter.get('/', isAuth, (req, res) => {
	const { user } = req.session;
	delete user.password;
	res.render('index', {
		title: 'Perfil de Usuario',
		user,
	});
});

viewsRouter.get('/', isAuth, (req, res) => {
    const { user } = req.session;
  
    if (user.email === 'adminCoder@coder.com' && user.password === 'adminCod3r123') {
      user.role = ROLES.ADMIN;
    } else {
      user.role = ROLES.USER;
    }
  
    delete user.password;
  
    res.render('index', {
      title: 'Perfil de Usuario',
      user,
    });
  });


viewsRouter.get('/admin', isAdmin, (req, res) => {
    res.render('admin', {
      title: 'Panel de Administración',
    });
  });
  
  viewsRouter.get('/user', isUser, (req, res) => {
    res.render('user', {
      title: 'Panel de Usuario',
    });
  });

viewsRouter.get('/register', isGuest, (req, res) => {
	res.render('register', {
		title: 'Registrar Nuevo Usuario',
	});
});

viewsRouter.get('/login', isGuest, (req, res) => {
	res.render('login', {
		title: 'Inicio de Sesión',
	});
});

viewsRouter.get('/logout', (req, res) => {
    const message = 'Has cerrado sesión exitosamente.';
    res.render('logout', { message });
});

viewsRouter.get('/', (req , res) =>{
    const { user } = req.session;
    delete user.password;
    res.render('index' , {
        title: 'Home',
        user,
    });   
 });

 viewsRouter.get('/register', (req , res) =>{
    res.render('register' , {
        title: 'registrar nuevo Usuario',
    });   
 });

 viewsRouter.get('/login', (req , res) =>{
    res.render('login' , {
        title: 'Inicio de sesion',
    });   
 });

 viewsRouter.get('/product-details', (req, res) =>{
    res.render('product-details');
});

viewsRouter.post('/add-to-cart/:id', (req, res) => {
    // Aquí obtendrías el id del producto desde la URL y la cantidad desde el cuerpo de la solicitud (req.body.quantity)
    const productId = req.params.id;
    const quantity = req.body.quantity;
  
    // Aquí podrías agregar el producto al carrito según el id y la cantidad
  
    res.redirect('/cart');
  });

viewsRouter.get('/cart-details', (req, res) =>{
    res.render('cart-details');
});
  

  


export default viewsRouter;