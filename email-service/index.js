const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const newsletterRoutes = require('./routes/newsletter.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', newsletterRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
