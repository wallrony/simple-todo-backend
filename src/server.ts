import express from 'express';
import cors from 'cors';

import coreRouter from './routers/coreRouter';

const server = express();

server.use(express.json());
server.use(cors());
server.use('/api/core', coreRouter);

export default server;