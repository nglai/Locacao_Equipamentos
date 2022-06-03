import { EquipService } from "../../common/base.service";
import { equipamentos } from "../equipaments.entidade";

export class ListAllEquipamentsService implements EquipService {
    async execute(){

        return equipamentos
        
    }
}