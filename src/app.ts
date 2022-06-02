import express from 'express';
import {router} from './health/health.routes'

import { routerEquip } from "./router";

const app = express();

app.use(express.json());

app.use(router)

app.use(routerEquip)

app.listen(3333, () => {console.log('Servidor rodando!')});