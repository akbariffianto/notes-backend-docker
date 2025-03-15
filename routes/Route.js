import express from "express";
import {getNote, createNote, updateNote, deleteNote} from "../controller/NoteController.js";

const router = express.Router();

router.get("/notes", getNote);
router.post("/notes/add-notes", createNote);
router.put("/notes/update-notes/:id", updateNote);
router.delete("/notes/delete-notes/:id", deleteNote);

export default router;