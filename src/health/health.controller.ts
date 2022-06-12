import {Request, Response} from 'express';
import HealthService from './health.service';

class HealthController {
    async getHealth(req:Request, res:Response){
        res.status(200).send(await HealthService.execute());
    }
}

export default new HealthController();