import express from "express";
import EquipmentsController from "./equipments.controller";
const equipmentsRouter = express.Router();

equipmentsRouter.get('/list', EquipmentsController.getList);
equipmentsRouter.post('/add', EquipmentsController.add);

export {equipmentsRouter};