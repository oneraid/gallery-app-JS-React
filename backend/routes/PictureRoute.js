import express from "express";
import {
    getPictures,
    getPictureById,
    savePicture,
    updatePicture,
    deletePicture
} from "../controllers/PictureController.js";

const router = express.Router();

router.get('/pictures', getPictures);
router.get('/pictures/:id', getPictureById);
router.post('/pictures', savePicture);
router.patch('/pictures/:id', updatePicture);
router.delete('/pictures/:id', deletePicture);

export default router;