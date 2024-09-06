import Student from "../Schemas/student.Schemas.js";

export const findStudent = async (req, res) => {
    try {
        const studentdata = await Student.findOne({rollno,username});
        console.log(studentdata,"Student data");
        
        if (!studentdata)
            return res.status(404).json({
                message: `${studentdata} data not found`,
                success: false,
                data: studentdata,
            });

        res.status(200).json({
            message: "Students found successfully",
            success: true,
            studentdata,
        });
    } catch (error) {
        console.error("Error finding student:", error);
    }
};
