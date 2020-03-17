import user from '../controllers/userCotrnolers'
import express from 'express';
import validation from '../middleware/validation'
import isAdmin from '../middleware/isAdmin'
import checkToken from '../middleware/authentication'

const router = express.Router()

router.post("/auth/signup",validation.inputsValids(validation.schemas.UserSchema), user.userSignUp)
router.post("/auth/signin", user.userSignIn)
router.get("/allusers", checkToken, isAdmin, user.getAllUsers)
router.get("/useraccount/:id",checkToken, user.getOneUser)



export  default router 