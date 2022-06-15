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

    async modifier(req:Request, res: Response){
      try {
        await EquipmentsService.modifierEquipment({name: req.body.name}, req.params.id)
        res.status(200).send(`Equipamento modificado com sucesso!`)
      } catch (error) {
        res.status(400).send({error});
      }
    }
  
    // async delete(req:Request, res: Response){
    //   try {
    //     await EquipmentsService.deleteEquipment(req.params.id)
    //     res.status(200).send(`Equipamento deletado com sucesso!`)
    //   } catch (error) {
    //     res.status(400).send({error});
    //   }
    // }

}

export default new EquipmentsController();