import express, { json } from 'express';
import routes from './src/routes/postsRoures.js';

const app = express();
routes(app)

app.listen(3000,()=> {
console.log("Servidor escultando...");
});

