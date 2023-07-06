import { Router } from "express";
import { obtenerProductos, crearProductos } from "../controllers/productos.controllers";

const router = Router();





router
.route('/productos')
.get(obtenerProductos)
.post(crearProductos)

export default router