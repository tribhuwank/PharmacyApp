const express = require('express');
app = new express();

const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const { sequelize } = require('./models');
const config = require('./config/config');


//Setup middleware
app.use(cors());
app.use(morgan('combined'))
app.use(bodyParser.json())

require('./router')(app);

sequelize.sync()
    .then(() => {
        app.listen(config.port);
        console.log(`Server start on port ${config.port} with host at ${config.host}`);
    });