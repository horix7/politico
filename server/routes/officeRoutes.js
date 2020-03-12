import checkToken from '../middleware/authentication'
import office from '../controllers/officeControlers'
import express from 'express';

const router = express.Router()

router.post("/offices",checkToken, office.createOffice)


export  default router 