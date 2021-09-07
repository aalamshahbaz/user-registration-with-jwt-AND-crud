
const express = require('express')
const router = express.Router()
const checkToken = require('../Auth/token_validation') //importing jwt token verification function

const {userSignup,userLogin,addProduct,updateProduct,deactivate,getproduct} = require('../controller/userController');



//routes for users

router.get('/',checkToken, getproduct);
router.post('/signup',userSignup);
router.post('/login',userLogin);
router.post('/addproduct',checkToken, addProduct);
router.patch('/update' ,checkToken, updateProduct);
router.post('/deactivate',checkToken, deactivate);

module.exports=router;
