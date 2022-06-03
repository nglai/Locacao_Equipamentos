import { equipamentos } from "../equipaments.entidade";

export class DeleteOneEquipamentService {
    execute(index: number){

        if (!equipamentos[index]) {
            throw new Error()
        }
        
        return equipamentos.splice(index, 1)

    }
}