import user from '../controllers/userCotrnolers'
import express from 'express';
import validation from '../middleware/validation'
import isAdmin from '../middleware/isAdmin'

const router = express.Router()

router.post("/auth/signup",validation.inputsValids(validation.schemas.UserSchema), user.userSignUp)
router.post("/auth/signin", user.userSignIn)
router.get("/allusers",isAdmin, user.getAllUsers)
router.get("/useraccount", user.getOneUser)



export  default router 