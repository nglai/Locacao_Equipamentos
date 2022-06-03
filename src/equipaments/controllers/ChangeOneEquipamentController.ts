import { Request, Response } from "express";
import { ChangeOneEquipamentService } from "../services/ChangeOneEquipamentService";

export class ChangeOneEquipamentController {
    handle (req: Request, res: Response){
        try {
            
            const {index} = req.params;
            const indexNumber = parseInt(index)
    
            const {equipamento} = req.body;
    
            new ChangeOneEquipamentService().execute(indexNumber, equipamento)

            res.status(200).send(`Equipamento alterado com sucesso!`)

        } catch (error) {
            res.status(404).send(`Não existe equipamento com esse indice!`)
        }

    }
}