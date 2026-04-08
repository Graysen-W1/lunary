// controllers/entryController.mjs
// this will handle the logic for journal entry CRUD operations
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { client, getTodayDate } from '../models/db.mjs';
import { ObjectId } from 'mongodb';

// CREATE: adds a new journal entry
// source: https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/
async function createEntry(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const db = client.db('cis486');
    const collection = db.collection('entries');
    const today = getTodayDate();

    // this checks if an entry already exists for today
    const existing = await collection.findOne({ date: today });
    if (existing) {
      return res.status(409).json({ error: 'An entry for today already exists. Please edit it instead.' });
    }

    const entry = {
      title,
      content,
      date: today,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(entry);
    res.status(201).json({ message: 'Journal entry saved!', id: result.insertedId });
  } catch (error) {
    console.error('Error creating entry:', error);
    res.status(500).json({ error: 'Failed to save journal entry' });
  }
}

// READ: this gets all journal entries, newest sorted first
// source: https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
// source: https://www.w3schools.com/jsref/jsref_sort.asp
async function getAllEntries(req, res) {
  try {
    const db = client.db('cis486');
    const collection = db.collection('entries');
    
    const entries = await collection.find({}).sort({ date: -1 }).toArray();
    res.json(entries);
  } catch (error) {
    console.error('Error reading entries:', error);
    res.status(500).json({ error: 'Failed to get journal entries' });
  }
}

// READ: this gets today's journal entry
async function getTodayEntry(req, res) {
  try {
    const db = client.db('cis486');
    const collection = db.collection('entries');
    const today = getTodayDate();
    const entry = await collection.findOne({ date: today });

    if (!entry) {
      return res.json({ exists: false });
    }

    res.json({ exists: true, entry });
  } catch (error) {
    console.error('Error reading today\'s entry:', error);
    res.status(500).json({ error: 'Failed to get today\'s entry' });
  }
}

// UPDATE: this updates a journal entry by ID
// source: https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/
async function updateEntry(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const db = client.db('cis486');
    const collection = db.collection('entries');

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { title, content, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Entry not found' });
    }

    res.json({ message: 'Journal entry updated!' });
  } catch (error) {
    console.error('Error updating entry:', error);
    res.status(500).json({ error: 'Failed to update journal entry' });
  }
}

// DELETE: this deletes a journal entry by ID
// source: https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/
async function deleteEntry(req, res) {
  try {
    const { id } = req.params;

    const db = client.db('cis486');
    const collection = db.collection('entries');

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Entry not found' });
    }

    res.json({ message: 'Journal entry deleted!' });
  } catch (error) {
    console.error('Error deleting entry:', error);
    res.status(500).json({ error: 'Failed to delete journal entry' });
  }
}

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export { createEntry, getAllEntries, getTodayEntry, updateEntry, deleteEntry };
