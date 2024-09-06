export const Notes = async (req, res) => {
    try {
        const notes = await notes.create({
            title: req.body.title,
            content: req.body.content,
            author: req.user.id,
        });

        await notes.save();
        res.status(201).json({
            message: "Note created successfully",
            success: true,
            data: newNotes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
        });
    }
};
