import {Request, Response} from 'express';
import { HealthService } from './health.service';

export class HealthController {
    async getHealth(req:Request, res:Response){
        const healthService = new HealthService()
        res.status(200).json(await healthService.execute());
    }
}
