import mongoose, { Schema } from 'mongoose'

const userSchema = Schema({
    iss:{
        type:String
    },
    nbf:{
        type:Number,
    },
    aud:{
        type:String,
    }, 
    email:{
        type: String,
    },
    azp:{
        type:String
    },
    email_verified:{
        type: Boolean,
    },
    name:{
        type:String,
        required: true
    },
    picture:{
        type: String,
    },
    given_name:{
        type: String
    },
    family_name:{
        type: String
    },
    iat:{
        type: Number
    },
    exp:{
        type: Number
    },
    jti:{
        type: String
    },
    sub:{
        type: String,
        required: true
    }
})
const User =  mongoose.model('User', userSchema)
export default User

