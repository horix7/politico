import checkToken from '../middleware/authentication'
import party from '../controllers/partyControlers'
import express from 'express';

const router = express.Router()
// create party router 
router.post("/parties",checkToken, party.createParty)




export  default router 