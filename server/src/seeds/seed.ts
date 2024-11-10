import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";

import pythonQuestions from './pythonQuestions.json' assert { type: "json" };

db.once('open', async () => {
  try {
    // Pass only the model name to cleanDB
    await cleanDB('Question');

    // Seed the database with questions
    await Question.insertMany(pythonQuestions);

    console.log('Questions seeded!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
});