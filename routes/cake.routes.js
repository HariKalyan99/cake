
import express from 'express';
import { getCakes, postCakes } from '../controllers/cake.controllers.js';


const cakeRoutes = express.Router();

cakeRoutes.get("/cakes", getCakes);
cakeRoutes.post("/cakes/add", postCakes);


export default cakeRoutes; 