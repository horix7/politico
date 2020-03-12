import checkToken from '../middleware/authentication'
import party from '../controllers/partyControlers'
import validations from '../middleware/validation'
import express from 'express';

const router = express.Router()
// create party router 
router.post("/parties",checkToken,validations.inputsValids(validations.schemas.PartySchema), party.createParty)
router.get("/parties/:id", checkToken, party.viewParty)
router.get("/parties", checkToken, party.getAllParties)
router.put("/parties/:id",validations.inputsValids(validations.schemas.UpdateParty),checkToken, party.editParty)
router.delete("/parties/:id", checkToken, party.deletePartry)


export  default router 