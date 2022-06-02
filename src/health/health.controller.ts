import { request } from 'http';
import { HealthService } from './health.service';
import {Request, Response} from 'express';

export class HealthController {
    async getHealth(req:Request, res:Response){
        const healthService = new HealthService()
        res.status(200).json(await healthService.execute());
    }
}
