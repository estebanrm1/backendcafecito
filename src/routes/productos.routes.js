import { Router } from "express";
import {
  obtenerProductos,
  crearProductos,
  obtenerProducto,
  borrarProducto,
  editarProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

router
  .route("/productos")
  .get(obtenerProductos)
  .post(
    [
      check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({min: 2, max: 100})
        .withMessage('El nombre del producto debe tener entre 2 y 100 caracteres')
    ],
    crearProductos
  );

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(editarProducto);

export default router;
