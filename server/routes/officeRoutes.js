import checkToken from '../middleware/authentication'
import office from '../controllers/officeControlers'
import express from 'express';
import validation from '../middleware/validation'
import isAdmin from '../middleware/isAdmin'

const router = express.Router()

router.post("/offices",checkToken, isAdmin, validation.inputsValids(validation.schemas.OfficeSchema), office.createOffice)
router.get("/offices/:id", checkToken, office.viewOffice)
router.get("/offices", checkToken, office.getAllOffices)
router.put("/offices/:id",checkToken, isAdmin,validation.inputsValids(validation.schemas.updateOffice),office.editOffice)
router.delete("/offices/:id", checkToken,isAdmin, office.deleteOffice)
router.post("/offices/:id/register", checkToken,isAdmin, office.createCandiadate)
router.get("/candidates", checkToken, office.getAllCandidates)
router.post("/votes", checkToken, office.createAvote)
router.post("/petitions", checkToken, office.createPetition)
router.get("/office/:id/result", checkToken, office.viewResults)



export  default router 

