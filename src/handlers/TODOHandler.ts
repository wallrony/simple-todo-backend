import { Request, Response } from 'express';
import TODORepository from '../data/repositories/TODORepository';
import ApiResponseDTO from '../domain/dto/ApiResponseDTO';
import ITODO from '../domain/models/ITODO';

export default {
  async fetchAll(req: Request, res: Response) {
    let result: ApiResponseDTO | ITODO[];

    let status = 200;

    try {
      result = await TODORepository.fetchAll();
    } catch (e) {
      result = {
        message: e.message,
      };

      status = 500;
    }

    return res.status(status).send(result);
  },

  async create(req: Request, res: Response) {
    let result: ApiResponseDTO | ITODO;

    let status = 200;

    try {
      if(!req.body) {
        throw new Error('need todo data');
      } else if(!req.body.title) {
        throw new Error('need todo title');
      } else if(!req.body.date) {
        throw new Error('need todo date');
      }

      result = await TODORepository.create(req.body);
    } catch (e) {
      result = {
        message: e.message,
      };

      status = 400;
    }

    return res.status(status).send(result);
  },

  async update(req: Request, res: Response) {
    let result: ApiResponseDTO;

    let status = 200;

    try {
      const todoId = Number(req.params['id']);

      await TODORepository.update(req.body, todoId);

      result = {
        message: 'todo updated',
      };
    } catch (e) {
      result = {
        message: e.message,
      };

      status = 500;
    }

    return res.status(status).send(result);
  },

  async delete(req: Request, res: Response) {
    let result: ApiResponseDTO;
    
    let status = 204;

    try {
      const todoId = Number(req.params['id']);

      await TODORepository.delete(todoId);

      result = {
        message: 'todo deleted',
      };
    } catch (e) {
      result = {
        message: e.message,
      };

      status = 500;
    }

    return res.status(status).send(result);
  }
}