import express from 'express';
import { addRetailers, retailerById, searchRetailer } from '../controller/data.controller.js';

const dataRouter = express.Router();

dataRouter.post('/add', addRetailers);
dataRouter.get('/search', searchRetailer);
dataRouter.get('/:id', retailerById);

export { dataRouter };