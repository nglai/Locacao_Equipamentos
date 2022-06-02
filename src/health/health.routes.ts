import Router, { request, response } from "express"
import {Request, Response} from 'express';
import { HealthController } from "./health.controller";

const router = Router();
const controller = new HealthController()

router.get('/health', controller.getHealth)

export {router};