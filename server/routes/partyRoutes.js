import checkToken from '../middleware/authentication'
import party from '../controllers/partyControlers'
import validations from '../middleware/validation'
import express from 'express';
import isAdmin from '../middleware/isAdmin'

const router = express.Router()
// create party router 
router.post("/parties",checkToken,isAdmin,validations.inputsValids(validations.schemas.PartySchema), party.createParty)
router.get("/parties/:id", checkToken, party.viewParty)
router.get("/parties", checkToken, party.getAllParties)
router.put("/parties/:id",checkToken, isAdmin, validations.inputsValids(validations.schemas.UpdateParty), party.editParty)
router.delete("/parties/:id", checkToken,isAdmin, party.deletePartry)


export  default router 