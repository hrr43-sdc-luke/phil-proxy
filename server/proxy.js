const nr = require('newrelic');
const express = require('express');
const ejs = require('ejs');
const cors = require('cors')

const port = process.env.PORT || 4000
const app = express();

app.use(express.static('./public'));
app.use(cors())
app.engine('html', ejs.renderFile);

app.get('/:id', (req, res) => {
  res.render('../public/index.html');
})

app.listen(port, () => { console.log (`Listening on port ${port}`)});

