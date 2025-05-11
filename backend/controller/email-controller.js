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
    if(req.params.type === 'draft'){
        const emails = await Email.find({ type: 'draft' });
        return res.status(200).json(emails);
    }else if(req.params.type === 'bin'){
        const emails = await Email.find({ bin: true });
        return res.status(200).json(emails);
    } else if (req.params.type === 'allmail') {
        const emails = await Email.find({});
        return res.status(200).json(emails);
    }else if(req.params.type === 'starred'){
        const emails = await Email.find({ starred: true });
        return res.status(200).json(emails);
    }else{
        const emails = await Email.find({ type: req.params.type });
        return res.status(200).json(emails);
    }
    
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export const moveEmailsToBin = async (request, response) => {
    try {
        const selectedEmails = request.body.selectedEmails;
        await Email.updateMany(
            { _id: { $in: selectedEmails } },
            { $set: { bin: true, starred: false, type: '' }}
        );
        response.json({ message: "Emails moved to bin successfully" });
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: error.message });
    }
};
        
export const toggleStarredMails = async (request, response) => {
    try {   
        await Email.updateOne({ _id: request.body.id }, { $set: { starred: request.body.value }})
        response.status(201).json('Value is updated');
    } catch (error) {
        response.status(500).json(error.message);
    }
}
export const deleteEmails = async (request, response) => {
    try {
        await Email.deleteMany({ _id: { $in: request.body }})
        response.status(200).json('emails deleted successfully');
    } catch (error) {
        response.status(500).json(error.message);
    }
}
