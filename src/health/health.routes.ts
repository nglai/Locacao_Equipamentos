import Router, { request, response } from "express"
import {Request, Response} from 'express';
import { HealthController } from "./health.controller";

const healthRouter = Router();
const controller = new HealthController()

healthRouter.get('/health', controller.getHealth)

export {healthRouter};