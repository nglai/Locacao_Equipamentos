import Router from "express"
import { ChangeOneEquipamentController } from "./controllers/ChangeOneEquipamentController";
import { CreateEquipamentsController } from "./controllers/CreateEquipamentsController";
import { DeleteOneEquipamentController } from "./controllers/DeleteOneEquipamentController";
import { ListAllEquipamentsController } from "./controllers/ListAllEquipamentsController";

const equipRouter = Router();

const getAllController = new ListAllEquipamentsController
const postController = new CreateEquipamentsController
const patchController = new ChangeOneEquipamentController
const deleteController = new DeleteOneEquipamentController;

equipRouter.get('/equipamentos', getAllController.handle);

equipRouter.post('/equipamentos', postController.handle)

equipRouter.patch('/equipamentos/:index', patchController.handle)

equipRouter.delete('/equipamentos/:index', deleteController.handle)

export {equipRouter};