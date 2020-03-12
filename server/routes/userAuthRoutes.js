import user from '../controllers/userCotrnolers'
import express from 'express';

const router = express.Router()

router.post("/auth/signup", user.userSignUp)
router.post("/auth/signin", user.userSignIn)
router.get("/allusers", user.getAllUsers)
router.get("/useraccount", user.getOneUser)



export  default router 