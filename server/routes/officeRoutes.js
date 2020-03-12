import checkToken from '../middleware/authentication'
import office from '../controllers/officeControlers'
import express from 'express';

const router = express.Router()

router.post("/offices",checkToken, office.createOffice)
router.get("/offices/:id", checkToken, office.viewOffice)
router.get("/offices", checkToken, office.getAllOffices)
router.put("/offices/:id", checkToken, office.editOffice)
router.delete("/offices/:id", checkToken, office.deleteOffice)


export  default router 