import { equipamentos } from "../equipaments.entidade";

export class ChangeOneEquipamentService {
    execute(index: number, equipamento: string) {

        if (!equipamentos[index]) {
            throw new Error()
        }
        
        return equipamentos[index] = equipamento
    }
}