import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "member"
        },
        userinfo:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserInfo"
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)



export default mongoose.model("User", userSchema);