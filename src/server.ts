import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    StoreName: 'My Store'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    StoreName: 'My Store'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;