import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import PictureRoute from "./routes/PictureRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(PictureRoute);

app.listen(5000, ()=> console.log('Server Up and Running...'));