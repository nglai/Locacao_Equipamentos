import express from 'express';
import { healthRouter } from './health/health.routes'
import { equipmentsRouter } from './equipaments/equipments.routes'

const app = express();

app.use(express.json());

// Rotas
app.use(healthRouter);
app.use('/equipments', equipmentsRouter);

app.listen(3333, () => {console.log('Servidor rodando!')});