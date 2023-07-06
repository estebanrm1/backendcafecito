import { Router } from "express";
import { obtenerProductos, crearProductos, obtenerProducto, borrarProducto } from "../controllers/productos.controllers";

const router = Router();





router.route('/productos')
.get(obtenerProductos)
.post(crearProductos);

router.route('/productos/:id')
.get(obtenerProducto)
.delete(borrarProducto);

export default router