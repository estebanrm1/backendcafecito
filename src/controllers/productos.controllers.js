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