import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async(req,res) => {

    try{

        const{email,password} = req.body;

        const user = await userModel.findOne({email})


        if(!user){
            res.json({success:false,message:"User does'nt exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)


        if(isMatch){
            const token = createToken(user._id)

            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid credential"})
        }

    }catch(err){
        res.json({success:false,message:err.message})
    }

}



const registerUser = async(req,res) => {

   try{

    const{name,email,password} = req.body;

    const exists = await userModel.findOne({email})

    if(exists){
        return res.json({success:false,message:"User already exist"})
    }

    //validating email format

    if(!validator.isEmail(email)){
        return res.json({success:false,message:"enter a valid email"})
        
    }

    if(password.length < 8){
        return res.json({success:false,message:"Enter a strong password"})
        
    }
    //hashing user pass

    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password,salt)


    const newUser = new userModel({
        name,
        email,
        password:hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)

    res.json({success:true,token})

    

   }catch(error){

    console.log(err)

    res.json({success:false,message:error.message})

   

   }


}


//route for admin login


const adminLogin = async(req,res) => {

} 

export {loginUser , registerUser,adminLogin}