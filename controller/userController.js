const jwt = require('jsonwebtoken')
const { userSignUp, userLogin ,addProduct ,update,deactivate,getproduct} = require('../model/userModel') //importing function from model



exports.userSignup = function (req, res) {

    var users = {
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "password": req.body.password,
        "is_active": req.body.is_active
    }

    console.log(users)
    userSignUp(users, function (error, results) {
        if (error) {
            res.send({ "code": 400, "failed": "error ocurred" })
        } else {
            res.send({ "code": 200, "success": "user registered sucessfully", data: results });
        }

    });

}

exports.userLogin = function (req, res) {
    let email = req.body.email
    let password = req.body.password
    if (email&&password) {

        userLogin(email,password, function (err, results, fields) {
            if (results.length > 0) {
                const token = jwt.sign({
                    email: results[0].email,
                    userId: results[0].id
                },
                    'SECRET_KEY', { //secret key (anything)
                    expiresIn: '50s'  //setting expiry time
                })

                res.send({ "code": 200, "success": "login sucessfull", data: token })

            }
            else res.send({"code": 400, message:'incorrect pasword/email'})

        })
    }
    else {
        res.send('Please enter Username and Password!');
    }
}

exports.addProduct=function(req,res){

    let product=req.body 

    addProduct(product,function(err,results){
        if(err){
            console.log(err)
        }
        else{
            res.send({message:'product added succesfully',data:results})
        }
    })
}

exports.updateProduct=(req,res)=>{
   let data=req.body

    update(data,(err,results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({code:'200',message:'product updated succesfully',data:results})
        }

    })
}

exports.deactivate=function(req,res){

    data=req.body
    deactivate(data,function(err,results){
        if(err){
            console.log(err)
        }
        else{
            res.send({code:'200',message:'product updated succesfully',data:results})
        }

    })
}

exports.getproduct=function(req,res){
    getproduct(function(err,results){
        if(err){
            console.log(err)
        }
        else{
            res.send({code:'200',data:results})
        }

    })
}
