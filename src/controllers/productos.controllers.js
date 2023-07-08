import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const obtenerProductos = async (req, res) => {
    try {
        //pedir a la base de datos la lista de productos
        const listaProductos = await Producto.find();
        res.status(200).json(listaProductos);

    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar productos',
        });
    }

};

export const obtenerProducto = async (req, res) =>{
    try {
        const producto = await Producto.findById(req.params.id)
        res.status(200).json(producto);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al buscar el producto'
        })
    }
}

export const crearProductos = async (req, res) => {
    try {

        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: 'El producto se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al crear producto',
        });
    }
};

export const borrarProducto = async (req, res)=>{
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El producto fue eliminado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje:'Error al borrar el producto',
        });
    }
}

export const editarProducto = async (req, res)=>{
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'El producto fue editado correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar el producto',
        });
    }
}