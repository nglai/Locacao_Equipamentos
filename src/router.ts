import { deleteEquip, getEquip, patchEquip, postEquip } from "./controller";
import Router from "express"

const routerEquip = Router();


routerEquip.get('/equipamentos', getEquip);

routerEquip.post('/equipamentos', postEquip)

routerEquip.patch('/equipamentos/:index', patchEquip)

routerEquip.delete('/equipamentos/:index', deleteEquip)

export {routerEquip};