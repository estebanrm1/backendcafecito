import { Router } from "express";
import {
  obtenerProductos,
  crearProductos,
  obtenerProducto,
  borrarProducto,
  editarProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";
import validarProducto from "../helpers/validacionProducto";

const router = Router();

router
  .route("/productos")
  .get(obtenerProductos)
  .post(validarProducto, crearProductos
  );

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(validarProducto, editarProducto);

export default router;
