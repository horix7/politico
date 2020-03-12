import checkToken from '../middleware/authentication'
import party from '../controllers/partyControlers'
import validations from '../middleware/validation'
import express from 'express';

const router = express.Router()
// create party router 
router.post("/parties",checkToken, party.createParty)
router.get("/parties/:id", checkToken, party.viewParty)
router.get("/parties", checkToken, party.getAllParties)



export  default router 