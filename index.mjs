import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('partials/landing'); 
});

app.listen(3000, () => {
  console.log('Express server running on http://localhost:3000');
});

app.use(express.static(path.join(__dirname, 'public')));
