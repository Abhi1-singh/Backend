const express = require('express')
const app = express();
////////.env import/////////////
const env = require('dotenv')
env.config();
const swaggerui = require('swagger-ui-express')
const swaggerjsdoc = require('swagger-jsdoc');

///////////////////////////////
app.use (express.json());
//////psrt is hide resion .env /port hide karna padega resion security .env////////
// const port = 6000;
////////DOTENV///////////////////////
const port = process.env.SERVER_PORT;
////////////////////////////////////
////////swagger part////////////
const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "node js api documentation for mysql",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: ['./Routes/categoryRoute/categoryRoute.js']
} 

app.use('/testing',swaggerui.serve, swaggerui.setup(swaggerjsdoc(option)));
/////////////////swagger ////////////////////////////////////////////////////
const categoryRouter = require('./Routes/categoryRoute/categoryRoute')
const subcategoryRouter = require('./Routes/subcategoryRoute/subcategoryRoute')
const productRouter = require ('./Routes/productRoute/productRoute')
app.use('/',categoryRouter,subcategoryRouter,productRouter);

app.listen(port,()=>{
    console.log (`server is running on  ${port}port`)
});