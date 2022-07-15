import { Request, Response } from "express";
import RentalsService from "./rentals.service";


class RentalsController {

    async create(req: Request, res: Response){
        try {
            await RentalsService.createRental(req.body)
            res.status(201).send(`Locação criado com sucesso`)
        } catch (error) {
            res.status(400).send({error});
        }
    }

    async listAll(req:Request, res:Response){
        try {
            const all = await RentalsService.listAllRentals()
            res.status(200).send(all)
        } catch (error) {
            res.status(400).send({error});
        }
    }

    async modify(req: Request, res: Response){
        try {
            await RentalsService.modifyRental(req.body, req.params.id)
            res.status(200).send(`Modificado`)
        } catch (error) {
            res.status(400).send({error});
        }
    }

    async getList(req: Request, res: Response){
        try {
            const {id} = req.params
            const list = await RentalsService.detailsRental(id)
            res.status(200).send(list)
        } catch (error) {
            res.status(400).send({error});
        }
    }
}

export default new RentalsController();