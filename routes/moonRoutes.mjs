// routes/moonRoutes.mjs
// defines the moon phase and health check routes
// source: https://expressjs.com/en/guide/routing.html
import { Router } from 'express';
import { getMoonPhase, getHealth } from '../controllers/moonController.mjs';

const router = Router();

router.get('/moon', getMoonPhase);
router.get('/health', getHealth);

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export default router;
