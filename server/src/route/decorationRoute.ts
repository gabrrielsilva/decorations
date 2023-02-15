import { Router } from 'express';
import { DecorationService } from '../service/decorationService';
import { Source } from '../types/Source';
const router = Router();

router.get('/decorations', async (request, response, next) => {
  const sources = <Source[]>request.body;
  return await DecorationService.prototype.getAll(sources);
})

export { router };
