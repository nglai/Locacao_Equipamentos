import { v4 as uuid } from 'uuid';
import { EquipmentEntity } from '../equipaments/equipments.entity';


class RentalEntity {
    private codigo: string;
    private itemsRentals: RentalItem [] = [];
    private createdDate: Date


    constructor(params: RentalItem) {
        this.codigo = uuid();
        this.itemsRentals.push(params)
        console.log("params", params)
        this.createdDate = new Date()
       
    }

    getState():DetailsRental{
        return {
            codigo: this.codigo,
            itemsRentals: this.itemsRentals,
            createDate: this.createdDate
        }
    }

    update(params: {itemsRentals: RentalItem []}){
        this.itemsRentals = params.itemsRentals
        return {
            codigo: this.codigo,
            itemsRentals: this.itemsRentals,
            createDate: this.createdDate
        }
    }

}

type RentalItem = {
    equipment: EquipmentEntity
    quantity: number
}

type DetailsRental = {
    codigo: string
    itemsRentals: RentalItem []
    createDate: Date
}

export { RentalEntity, RentalItem, DetailsRental };