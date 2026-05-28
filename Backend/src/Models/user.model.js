import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: 6,
        },

        phone: {
            type: String,
            required: true,
        },

        dob: {
            type: Date,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
        },

        bloodGroup: {
            type: String,
            enum: [
                "A+",
                "A-",
                "B+",
                "B-",
                "AB+",
                "AB-",
                "O+",
                "O-",
            ],
        },

        height: {
            type: Number, // in cm
        },

        weight: {
            type: Number, // in kg
        },

        address: {
            type: String,
        },

        emergencyContact: {
            name: String,
            relation: String,
            phone: String,
        },

        allergies: [
            {
                type: String,
            },
        ],

        chronicConditions: [
            {
                type: String,
            },
        ],

        // Profile Image
        profileImage: {
            type: String,
            default: "",
        },

        // Account Role
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

        // References to Other Models

        documents: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Document",
            },
        ],

        bloodRecords: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "BloodRecord",
            },
        ],

        organHealthRecords: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "OrganHealth",
            },
        ],

        appointments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Appointment",
            },
        ],

        medications: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Medication",
            },
        ],
    },
    {
        timestamps: true,
    }
);



// Hashing password before saving it
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

// Custom method to compare password 
userSchema.methods.isPasswordCorrect = function (password) {
    return bcrypt.compare(password, this.password)
}

export const UserModel = mongoose.model("User", userSchema);
