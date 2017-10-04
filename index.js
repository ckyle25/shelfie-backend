const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const {getShelf,getBin,editBin,addBin,deleteBin} = require('./controller.js')
require('dotenv').config();

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance);
});

app.use( bodyParser.json() );
app.use( cors() );

app.use(express.static('./build'))

app.get('/api/shelf/:id',getShelf);
app.get('/api/bin/:id',getBin);
app.put('/api/editbin/:id',editBin);
app.put('/api/addbin/:id',addBin);
app.put('/api/deletebin/:id',deleteBin);

const port = process.env.PORT || 3001
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
