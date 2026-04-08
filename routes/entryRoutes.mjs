// routes/entryRoutes.mjs
// defines the journal entry API routes
// source: https://expressjs.com/en/guide/routing.html
import { Router } from 'express';
import { createEntry, getAllEntries, getTodayEntry, updateEntry, deleteEntry } from '../controllers/entryController.mjs';

const router = Router();

// CRUD routes for journal entries
router.post('/entry', createEntry);
router.get('/entries', getAllEntries);
router.get('/entry/today', getTodayEntry);
router.put('/entry/:id', updateEntry);
router.delete('/entry/:id', deleteEntry);

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export default router;
