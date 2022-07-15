import express from "express";
import RentalsController from "./rentals.controller";
const rentalRouter = express.Router()

rentalRouter.post('/add',  RentalsController.create)
rentalRouter.get('/list', RentalsController.listAll)
rentalRouter.get('/list/:id', RentalsController.getList)
rentalRouter.put('/modify/:id', RentalsController.modify)

module.exports = rentalRouter