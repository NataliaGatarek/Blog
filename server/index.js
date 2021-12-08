const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to Mongo")).catch(err => console.log(err));

app.use(express.json());
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);

app.listen("5000", () => {
    console.log("Backend is running")
});