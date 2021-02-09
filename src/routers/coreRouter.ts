import express from 'express';
import TODOHandler from '../handlers/TODOHandler';

const router = express.Router();

router.route('/todo')
  .get(TODOHandler.fetchAll)
  .post(TODOHandler.create);

router.route('/todo/:id')
  .put(TODOHandler.update)
  .delete(TODOHandler.delete);

export default router;
