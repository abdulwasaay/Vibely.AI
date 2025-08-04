import user from "../../models/UserSchema";

const forgetController = async (req, res) => {
    const { email } = req.body;
    const users = await user.findOne({ email });
    if (users){
        
    }
}

export default forgetController