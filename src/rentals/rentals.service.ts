import { RentalsDto } from "./dto/rentals.dto"
import { DetailsRental, RentalEntity, RentalItem } from "./rentals.entity"

class RentalsService {
    private rentals: RentalEntity[] = []

    createRental(params: RentalsDto.CreateRentalDto){
        const rental = new RentalEntity(params)
        console.log(rental.getState())
        this.rentals.push(rental)
    }

    listAllRentals(){
        return this.rentals
    }

    modifyRental(params: RentalsDto.ModifyRentalDto, id: string){
        const index = this.rentals.findIndex(item => item.getState().codigo === id)
        this.rentals[index].update(params)
        return this.rentals[index].getState()
    }

    // detailsRental(id: string){
    //     const index = this.rentals.findIndex(item => item.getState().codigo === id)
    //     let locacoes2:any = this.rentals[0].getState()
    //     let locacoes:any = this.rentals[0].getState().itemsRentals[0]
    //     var total = 0
    //     var totalItems = 0
    //     for (let i = 0; i < locacoes.length; i++) {
    //         var valor = locacoes[i].equipment.valorLocacao
    //         var quantidade = locacoes[i].quantity
    //         var subtotal = valor * quantidade
    //         locacoes[i].subtotal = subtotal
    //         total += subtotal
    //         totalItems += quantidade
    //     }
    //     locacoes2.itemsRentals[0] = locacoes
    //     locacoes2.total = total
    //     locacoes2.totalItems = totalItems
    //     return locacoes2
    // }

    detailsRental(id: string){
        const index = this.rentals.findIndex(item => item.getState().codigo === id)
        let locacoes2:any = this.rentals[index].getState()
        let locacoes:any = this.rentals[index].getState().itemsRentals[0]
        console.log(this.rentals)
        var total = 0
        var totalItems = 0
        for (let i = 0; i < locacoes.length; i++) {
            var valor = locacoes[i].equipment.valorLocacao
            var quantidade = locacoes[i].quantity
            var subtotal = valor * quantidade
            locacoes[i].subtotal = subtotal
            total += subtotal
            totalItems += quantidade
        }

        // locacoes.forEach((item:string, index:number) => {
        //     var valor = locacoes[index].equipment.valorLocacao
        //     var quantidade = locacoes[index].quantity
        //     var subtotal = valor * quantidade
        //     locacoes[index].subtotal = subtotal
        //     total += subtotal
        //     totalItems += quantidade
        // });
       
        locacoes2.itemsRentals[0] = locacoes
        locacoes2.total = total
        locacoes2.totalItems = totalItems
        return locacoes2
    }
}


export default new RentalsService();