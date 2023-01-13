import express, { Router } from "express";
import { claimNFT } from "../controllers";

const router: Router = express.Router();

router.post("/claim", claimNFT);

export default router;
