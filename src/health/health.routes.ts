import express from "express";
import HealthController from "./health.controller";
const healthRouter = express.Router();

healthRouter.get('/health', HealthController.getHealth);

export {healthRouter};