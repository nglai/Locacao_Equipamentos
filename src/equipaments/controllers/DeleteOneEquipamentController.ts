import { Request, Response } from "express";
import { DeleteOneEquipamentService } from "../services/DeleteOneEquipamentService";

export class DeleteOneEquipamentController {
    handle (req: Request, res: Response){

        try {
            
            const {index} = req.params;
            const indexNumber = parseInt(index);
    
            new DeleteOneEquipamentService().execute(indexNumber);

            res.status(200).send(`Equipamento deletado com sucesso!`)

        } catch (error) {
            res.status(404).send(`Não existe equipamento com esse indice!`)
        }
    }
}