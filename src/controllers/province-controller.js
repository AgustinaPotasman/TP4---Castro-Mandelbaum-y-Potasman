import {Router} from 'express';
import express from "express";
import ProvinceService from "../services/province-service.js"
import ValidacionesHelper from "../helpers/validaciones-helper.js"
const ProvinceRouter =  Router();
const svc = new ProvinceService();
  
ProvinceRouter.get('' , async (req, res) =>{
    let respuesta;
    const provinciasArray = await svc.getAllAsync();
    if (provinciasArray != null){
        respuesta = res.status(200).json(provinciasArray);
    } else {
        respuesta = res.status(500).send(`Error interno.`);
    }
    return respuesta;
});

ProvinceRouter.get("/:id" , async (req, res) => {
    let respuesta;
    const id = req.params.id;
    if (ValidacionesHelper.getIntegerOrDefault(id, 0) > 0) {
      const provinciasArray = await svc.getByIdAsync(id);
      if (provinciasArray != null) {
        respuesta = res.status(200).json(provinciasArray);
      } else {
        respuesta = res.status(500).send(`Error interno.`);
      }
    } else {
      respuesta = res.status(400).send(`Error en la solicitud.`);
    }
    return respuesta;
});

ProvinceRouter.post("", async (req, res) => 
{
    let respuesta;
    const entity = req.body;
    console.log(entity.name);
    if (entity != null) {
      const provinciasArray = await svc.createAsync(entity);
      if (provinciasArray != null) {
        respuesta = res.status(200).json(provinciasArray);
      } else {
        respuesta = res.status(500).send(`Error interno.`);
      }
    } else {
      respuesta = res.status(400).send(`Error en la solicitud.`);
    }
    return respuesta;
});

ProvinceRouter.put("/api/province", (req, res) => 
{
    const { id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion } = req.body;
    const Nombre = ValidacionesHelper.getStringOrDefault(nombre, 'Invitado');
    const NombreCompleto = ValidacionesHelper.getStringOrDefault(nombreCompleto, 'Invitado');
    const Latitud = ValidacionesHelper.getFloatOrDefault(latitud, 0);
    const Longitud = ValidacionesHelper.getFloatOrDefault(longitud, 0);
    const OrdenVisualizacion = ValidacionesHelper.getFloatOrDefault(ordenVisualizacion, 0);
    const ID = ValidacionesHelper.getFloatOrDefault(id, 0);
    if (!Nombre || Nombre.length < 3) {
        return res.status(400).send("El nombre de la provincia debe tener al menos 3 caracteres.");
    }
    let provinciaEncontrada = false;
    for (let i = 0; i <= arrayProvincias.arrayProvincias.length; i++) {
        if (arrayProvincias.arrayProvincias[i].id == ID) {
            arrayProvincias.arrayProvincias[i].nombre = Nombre;
            arrayProvincias.arrayProvincias[i].nombreCompleto = NombreCompleto;
            provinciaEncontrada = true;
            res.status(201).send("Modificado");
        } 
        if (!provinciaEncontrada) {
            return res.status(404).send("No se encontró ninguna provincia con ese ID.");
        }
    }
})

ProvinceRouter.delete("/api/province/:id", (req, res) => {
    const id = req.params.id;
    let index = -1;
    for (let i = 0; i <= arrayProvincias.arrayProvincias.length; i++) {
        if (arrayProvincias.arrayProvincias[i].id == id) {
            index = i;
            if (index !== -1) {
      
                arrayProvincias.arrayProvincias.splice(index, 1);
                res.status(200).json({ message: "Provincia eliminada correctamente" });
            } 
        }
        else {
            res.status(404).send("Provincia no encontrada" );
        } 
        }       
       

})


export default ProvinceRouter