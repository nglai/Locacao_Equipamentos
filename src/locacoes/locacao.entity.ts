import { v4 as uuid } from 'uuid';
import { EquipmentEntity } from '../equipaments/equipments.entity';


class LocacaoEntity {
    private codigo: string;
    private itemsRentals: LocacaoItem [] = [];
    private createdDate: Date


    constructor(params: LocacaoItem) {
        this.codigo = uuid();
        this.itemsRentals.push(params)
        this.createdDate = new Date()
    }

}

type LocacaoItem = {
    equipment: EquipmentEntity
    quantity: number
}

export { LocacaoEntity };