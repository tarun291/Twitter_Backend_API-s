import express from 'express'

import apiRoutes from './routes/index.js'

import { connect } from './config/database.js';
import bodyParser from 'body-parser';

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(3700, async () => {
    console.log('server started at port', 3700)
    await connect();
    console.log('MongoDB connected Successfully');
})


