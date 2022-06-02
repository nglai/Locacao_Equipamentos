import { Request, Response } from "express";
import { Equipamentos } from "./entidade";


export const getEquip = (req: Request, res: Response) => {
    try {
        res.status(200).json(Equipamentos)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const postEquip = (req: Request, res: Response) => {
    const {equipamento} = req.body;

    try {

        if(!equipamento){
            res.status(422).send(`Os campo equipamento deve ser preenchido!`)
            return
        }

        Equipamentos.push(equipamento)

        res.status(201).send(`Equipamento adicionado com sucesso!`)

    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const patchEquip = (req:Request, res:Response) => {
    const {index} = req.params;
    const {equipamento} = req.body;
    const ind = parseInt(index)

    try {

        if(!Equipamentos[ind]){
            res.status(204).send(`Não existe equipamento com esse indice!`)
            return
        }

        Equipamentos[ind] = equipamento

        res.status(200).send(`Equipamento atualizado com sucesso!`)

    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deleteEquip = (req:Request, res:Response) => {
    const {index} = req.params;
    const ind = parseInt(index)
    
    try {  

        if(!Equipamentos[ind]){
            res.status(204).send(`Não existe equipamento com esse indice!`)
            return
        }

        Equipamentos.splice(ind, 1)
        
        res.status(200).send(`Equipamento deletado com sucesso!`)
    } catch (error) {
        res.status(500).json({error:error})
    }
}