import {Request, Response} from 'express';
import EquipmentsService from './equipments.service';

class EquipmentsController {
    async getList(req:Request, res:Response){
      res.status(200).send(await EquipmentsService.listAllEquipments());
    }

    async add(req:Request, res:Response){
      await EquipmentsService.createEquipment(req.body).then(result => {
        res.status(200).send(result);
      }).catch(error => {
        res.status(400).send({error});
      });
    }
}

export default new EquipmentsController();