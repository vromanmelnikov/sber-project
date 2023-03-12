const express = require("express");
const homeController = require('./controllers/homeController.js');
const homeRouter = require("./routes/homeRouter.js");

const app = express();

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use("/", homeRouter);
 
// обработка ошибки 404
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});
 
app.listen(3000, () => {
    console.log(`Server is working on http://localhost:3000/`)
});