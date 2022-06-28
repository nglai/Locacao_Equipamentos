import { RentalsDto } from "./dto/rentals.dto"
import { RentalEntity, RentalItem } from "./rentals.entity"

class RentalsService {
    private rentals: RentalEntity[] = []

    createRental(params: RentalsDto.CreateRentalDto){
        const rental = new RentalEntity(params)
        this.rentals.push(rental)
    }

    listAllRentals(){
        return this.rentals.map(item => item.getState())
    }

    modifyRental(params: RentalsDto.ModifyRentalDto, id: string){
        const index = this.rentals.findIndex(item => item.getState().codigo === id)
        this.rentals[index].update(params)
        return this.rentals[index].getState()
    }

    detailsRental(id: string){
        const index = this.rentals.findIndex(item => item.getState().codigo === id)
        const a =  this.rentals.map(item => item.getState())
        // const b = a.map(item => item.itemsRentals)
        console.log('a', a[index].itemsRentals[0])
        return this.rentals[index].getState()
    }
}

export default new RentalsService();