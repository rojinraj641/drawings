import express from "express";
import details from "../controllers/details.controller.js";

const router = express.Router();
router.route('/details').get(details);

export default router;
