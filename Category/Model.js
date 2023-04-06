const con = require("../Connection")

class CategoryModel {
    constructor(){}
    GetAll(){
        const query = 'SELECT * FROM tbl_category'
        return new Promise((resolve, reject) => {
            con.query(query, (err,data) => {
                if(err) return reject(err)
                resolve(data)
            })
        })
    }
}

const category = new CategoryModel()

module.exports = category