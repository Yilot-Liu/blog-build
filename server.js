// server.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'website_data'
});

app.get('/api/site-info', (req, res) => {
  db.query('SELECT * FROM site_info WHERE id = 1', (err, results) => {
    if (err) return res.status(500).send(err);

    const site = results[0];
    const startTime = new Date(site.start_time);
    const now = new Date();
    const diffDays = Math.floor((now - startTime) / (1000 * 60 * 60 * 24));

    res.json({
      start_time: site.start_time,
      days: diffDays,
      visits: site.visits
    });
  });
});

app.post('/api/visit', (req, res) => {
  db.query('UPDATE site_info SET visits = visits + 1 WHERE id = 1', (err) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

app.listen(3000, () => {
  console.log('✅ 后端运行在 http://localhost:3000');
});
