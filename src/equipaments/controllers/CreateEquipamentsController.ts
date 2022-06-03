import { Request, Response } from "express";
import { CreateEquipamentService } from "../services/CreateEquipamentsService";

export class CreateEquipamentsController {
    handle (req:Request, res: Response){
        try {

            const {equipamento} = req.body;

            new CreateEquipamentService().execute(equipamento)

            res.status(201).send(`Equipamento adicionado com sucesso!`)
            
        } catch (error) {
            res.status(422).json("O campo equipamento deve ser preenchido")
        }
    }
}