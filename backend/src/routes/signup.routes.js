import express from "express";
import signup from "../controllers/signup.controllers.js";

const router = express.Router();
router.route('/signup').post(signup);

export default router;