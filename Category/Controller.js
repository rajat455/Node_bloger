const category = require("./Model");

class CategoryController {
    constructor(){}

    async FetchAll(req,res){
        try {
            const result = await category.GetAll()
            if(!result) return res.status(500).send({message:"Somthing went wrong"})
            if(!(result.length >= 0)) return res.status(404).send({message:"Not Found"})
            return  res.status(200).send({message:"success", data:result})
        } catch (err) {
            return res.status(500).send({message:"Internal server error"})
        }
    }
}

const categoryController = new CategoryController()

module.exports = categoryController