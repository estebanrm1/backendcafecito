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
        .withMessage('El nombre del producto debe tener entre 2 y 100 caracteres'),
      check('precio')
        .notEmpty()
        .withMessage('El precio es un dato obligatorio')
        .isNumeric()
        .withMessage('El precio debe ser un numero')
        .custom(((valorPrecio)=>{
          if(valorPrecio >= 1 && valorPrecio <= 10000){
            return true
          }else{
            throw new Error('El precio debe estar entre 1 y 10000 pesos')
          }
        })),
      check('url')
        .notEmpty()
        .withMessage('La url de la imagen es obligatoria')
        .matches(/(https?:\/\/.*\.(?:png|jpg))/)
        .withMessage('Debe ser una url valida con extencion (png|jpg)'),
      check('categoria')
        .notEmpty()
        .withMessage('La categoria es un dato obligatorio')
        .isIn(['bebida caliente', 'bebida fria', 'dulce', 'salado'])
        .withMessage('Debe ingresar una categoria valida')
    ],
    crearProductos
  );

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(editarProducto);

export default router;
