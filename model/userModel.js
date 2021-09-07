const { updateProduct } = require('../controller/userController');
let sql= require('./db') //importing database

   userSignUp= function (users, result) {

        sql.query("INSERT INTO user SET ?", [users], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });
    }

    userLogin = function(email,password,callback){
        sql.query("SELECT * FROM user where email=? AND password =?",[email,password], function (err, res) {
       
            if (err) {
                console.log("error", err);
                callback(null, err)

            } else {
                callback(null, res);
            }

        });


    }


// add product

  addProduct= function(product,callback){
    sql.query("INSERT INTO product SET?",[product],function(err,res){
        if (err) {
            console.log("error", err);
            callback(null, err)

        } else {
            callback(null, res);
        }

    })
}
//update product
 update=function(data,callback){
    sql.query("UPDATE product SET ? where id=?",[data,data.id],function(err,res){
        if (err) {
            console.log("error", err);
            callback(null, err)

        } else {
            callback(null, res);
        }
    })
}
//deactivate product
deactivate= function(data,callback){
    sql.query("UPDATE product SET is_active=? where id=?",[data.is_active,data.id],function(err,res){
        if (err) {
            console.log("error", err);
            callback(null, err)

        } else {
            callback(null, res);
        }
    })
}
//fetch all product

getproduct=function(callback){
    sql.query("SELECT * FROM product",function(err,res){
        if (err) {
            console.log("error", err);
            callback(null, err)

        } else {
            callback(null, res);
        }

    })
}

    module.exports={userSignUp,userLogin,addProduct,update,deactivate,getproduct};