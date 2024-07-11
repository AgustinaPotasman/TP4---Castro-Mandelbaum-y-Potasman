import {Router} from 'express';
import express from "express";
import ProvinceService from "../services/province-service.js"
import ValidacionesHelper from "../helpers/validaciones-helper.js"
const ProvinceRouter =  Router();
const svc = new ProvinceService();
  
ProvinceRouter.get('/' , async (req, res) =>{
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
  const { id } = req.params;
  try {
      const locations = await svc.getByIdAsync(id);
      if (locations) {
          res.status(200).json(locations);
      } else {
          res.status(404).json({ message: "El id enviado no existe" });
      }
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

ProvinceRouter.post("/", async (req, res) => 
{
    //haciendo decuenta que el id se pasa por body
    const {id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion}=req.body
    try {
        if (nombre==null || nombre.length<3){
            respuesta = res.status(400).send(`El nombre ingresado esta vacío o tiene menos de tres letras`);
        }
        else{
        const newProvince = await createProvince({ id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion});
        res.status(201).json(newEvent);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
   ProvinceRouter.put('/', async (req, res) => {
        const {id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion}=req.body
            try {
                const provincia = await svc.getByIdAsync(id);
                if (provincia.id !== id) { 
                    res.status(404).send('No existe una provincia con el id ingresado');
                    return;
                }
                else if (nombre==null || nombre.length<3){
                    respuesta = res.status(400).send(`El nombre ingresado esta vacío o tiene menos de tres letras`);
                }
                else {
                    const newProvince = await svc.updateProvince({id, nombre, nombreCompleto, latitud, longitud, ordenVisualizacion});
                    return res.status(200).json(newProvince);
                }
            }catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    ProvinceRouter.delete("/:id",async (req, res) => {
            const id = req.params.id;
            try {
                const provincia = await svc.getByIdAsync(id);
                if (provincia.id !== id) { 
                    res.status(404).send('No existe una provincia con el id ingresado');
                    return;
                }
                else {
                    await svc.deleteProvince({id});
                    return res.status(200).json({ message: 'Evento eliminado correctamente.'});
                }
            }catch (error) {
                res.status(500).json({ message: error.message });
            }
});
export default ProvinceRouter