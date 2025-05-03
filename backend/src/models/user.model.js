import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            enum: ["user", "agent"],
            default: "user", // Default role is user
        },
        location: {
            type: String,
            default: "Earth",
            required: false,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic: {
            type: String,
            default: function () {
                // Generate a unique seed based on the user's email
                const seed = this.fullName || "User";
                return `https://${seed}.jpg`;
            },
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;
