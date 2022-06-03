import { Request, Response } from "express";
import { ListAllEquipamentsService } from "../services/ListAllEquipamentsService";

export class ListAllEquipamentsController {
    async handle (req:Request, res:Response){

        const getEquip = new ListAllEquipamentsService()
        
        res.status(200).json(await getEquip.execute())
    }
}