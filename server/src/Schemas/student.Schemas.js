import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    rollno: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
