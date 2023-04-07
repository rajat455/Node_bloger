const con = require("../Connection")

class CategoryModel {
    constructor(){}
    GetAll(){
        const query = 'SELECT * FROM tbl_category'
        return new Promise((resolve, reject) => {
            con.query(query, (err,data) => {
                if(err) return reject(err)
                return resolve(data)
            })
        })
    }

    insertCategory(data){
        let query = `INSERT INTO tbl_category (title,alias) VALUES ("${data.name}" , "${data.alias}")`
        return new Promise((resolve,reject) => {
            con.query(query, (err,data) => {
                if(err) return reject(err)
                return resolve(data)
            })
        })
    }
}

const category = new CategoryModel()

module.exports = category