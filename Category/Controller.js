const category = require("./Model");

class CategoryController {
    constructor(){}

    async FetchAll(req,res){
        try {
            const result = await category.GetAll()
            if(!result) return res.status(500).send({message:"Somthing went wrong"})
            if(result.length <= 0) return res.status(404).send({message:"Not Found"})
            return  res.status(200).send({message:"success", data:result})
        } catch (err) {
            return res.status(500).send({message:"Internal server error"})
        }
    }

    async Addcategory(req,res){
        try {
            const result = await category.insertCategory(req.body)
            if(result.affectedRows > 0){
                return res.status(200).send({message:"Success"})
            }
            return res.status(500).send({message:"Somthing went wrong"})
        } catch (err) {
            if(err && err.message && err.message.split(":")[0] === "ER_DUP_ENTRY"){
                return res.status(400).send({message:err.message})
            }
            return res.status(500).send({message:"Internal server error"})
        }
    }
}

const categoryController = new CategoryController()

module.exports = categoryController