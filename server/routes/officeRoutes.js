import checkToken from '../middleware/authentication'
import office from '../controllers/officeControlers'
import express from 'express';
import validation from '../middleware/validation'

const router = express.Router()

router.post("/offices", validation.inputsValids(validation.schemas.OfficeSchema),checkToken, office.createOffice)
router.get("/offices/:id", checkToken, office.viewOffice)
router.get("/offices", checkToken, office.getAllOffices)
router.put("/offices/:id",validation.inputsValids(validation.schemas.updateOffice),checkToken, office.editOffice)
router.delete("/offices/:id", checkToken, office.deleteOffice)

export  default router 

