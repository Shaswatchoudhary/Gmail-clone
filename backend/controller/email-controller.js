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

export const getEmails = async (req, res) => {
    try {
        const { type } = req.params;
        // normalize 'drafts' to 'draft' to match stored type
        const queryType = type === 'drafts' ? 'draft' : type;
        const emails = await Email.find({ type: queryType });
        return res.status(200).json(emails);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};