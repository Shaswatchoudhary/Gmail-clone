import Email from "../models/email.js";

export const saveEmail = async (req,res) => {
    try {
        const email = await new Email(req.body);
        email.save();

        res.status(200).json('email saved successfully');
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
