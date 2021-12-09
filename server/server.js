const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoriesRoute = require("./routes/category");
const multer = require("multer");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to Mongo")).catch(err => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "img")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File uploaded")
});

app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/categories", categoriesRoute);

app.listen("5000", () => {
    console.log("Backend is running")
});