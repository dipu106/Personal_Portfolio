import express from "express";
const router=express.Router();
import {formMail} from '../Controllers/maileController.js';

router.post('/submitMail',formMail);

export default router;