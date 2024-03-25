import mongoose from "mongoose";

const UserInfoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        dateofbirth: {
            type: Date,
        },
        birthplace:{
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
        },
        education: {
            type: String,
            required: true,
        },
        hobbies :{
            type: String,
        },
        objective :{
            type: String,
        },
        cv :{
            type: mongoose.Schema.Types.ObjectId,
            ref: "CV"
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

    }
); 


const CVSchema = new mongoose.Schema(
    {
        skill :{
            type: String,
            required: true,
        },
        project :{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        },
        experience :{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Experience"
        }
    }
); 


const ProjectSchema = new mongoose.Schema(
    {
        name :{
            type: String,
            required: true,
        },
        content :{
            type: String,
            required: true,
        },
        role :{
            type: String,
            required: true,
        },
        timestart :{
            type: Date,
            required: true,
        },
        timeend :{
            type: Date,
            required: true,
        },
    }
); 

const ExperienceSchema = new mongoose.Schema(
    {
        timestart :{
            type: Date,
        },
        timeend :{
            type: Date,
        },
        company: {
            type: String,
            require: true,
        },
        role: {
            type: String,
            require: true,
        }
    }
); 