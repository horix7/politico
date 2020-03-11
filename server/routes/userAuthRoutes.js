import user from '../controllers/userCotrnolers'
import express from 'express';

const router = express.Router()

router.post("/auth/signup", user.userSignUp)

export  default router 