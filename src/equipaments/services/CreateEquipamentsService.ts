import { equipamentos } from "../equipaments.entidade";

export class CreateEquipamentService {
    execute(equipamento: string) {

        if (!equipamento) {
            throw new Error();
        }
        
        return equipamentos.push(equipamento)
    }
}