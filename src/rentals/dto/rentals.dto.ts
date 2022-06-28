import { EquipmentEntity } from "../../equipaments/equipments.entity"
import { RentalItem } from "../rentals.entity"

export namespace RentalsDto {
    export type CreateRentalDto = {
        itemsRentals: RentalItem
        equipment: EquipmentEntity
        quantity: number
    }
    export type ModifyRentalDto = {

        itemsRentals: RentalItem []
        equipment: EquipmentEntity
        quantity: number
    }
}