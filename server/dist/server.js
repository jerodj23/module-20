import express from 'express';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'url';
import db from './config/connection.js';
import routes from './routes/index.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static files from the client’s dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(routes);
db.once('open', () => {
    console.log(`Process environment PORT: ${process.env.PORT}`);
    app.listen(PORT, () => console.log(`🌍 Now listening on port ${PORT}`));
});
