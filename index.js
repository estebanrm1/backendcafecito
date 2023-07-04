import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

//usar puerto
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'))
})


//middlewares: funciones que se ejecutan antes de las rutas
app.use(cors()); //permitir conexiones remotas
app.use(express.json()); // permite a mi app recibir objetos de tipo json en los request
app.use(morgan('dev')); // Muestra en consola info extra de las solicitudes
console.log(path.join(__dirname, '/public')); //La variable __dirname siempre devuelve la ruta absoluta de donde vive el proyecto 
app.use(express.static(path.join(__dirname, '/public'))); //Esto nos permite poder ejecutar los archivos estaticos de mi proyecto en la ruta raiz de mi backend ej: http://localhost:4000


//rutas