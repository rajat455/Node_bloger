const express = require("express")
const categoryController = require("./Category/Controller")

const app = express()

app.use(express.json())

app.get("/category", categoryController.FetchAll)

app.post("/category", categoryController.Addcategory)

app.get("/", (req,res) => {
    return res.status(200).send({message:"success"})
})


app.listen(5000, () => {
    console.log("App Started")
})
