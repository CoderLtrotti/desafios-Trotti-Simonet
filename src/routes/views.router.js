import { Router } from "express";

const viewsRouter = Router();

viewsRouter.get('/cookies', (req, res) =>{
    res.render('cookies');
});



viewsRouter.get('/', (req , res) =>{
    res.render('index' , {
        title: 'Home',
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



export default viewsRouter;